import { Badge, Box, IconButton, Typography, Dialog } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../../asset/PNG's/logo.png";
import { useStyles } from './styles';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { useNavigate } from 'react-router-dom';
import routes from '../../utils/routes.json';
import { Link } from 'react-router-dom';
import Login from '../Login';
import { UseUserContext } from '../../context/GoogleAuthProvider';
import { RecaptchaVerifier, signInWithPhoneNumber, signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase/configs';
import VerifyOTP from '../VerifyOTP';

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const data = UseUserContext();
  const products = ['Bath & Body', 'Face', 'Hair Care', 'Combos', 'Gifts'];

  const [loginModal, setLoginModal] = useState(false);
  const [verifyModal, setVerifyModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [user, setUser] = useState();
  const [sender, setSender] = useState();

  const handleLoginModal = () => {
    setLoginModal(!loginModal);
  };

  const handleSignUpModal = () => {
    setSignUpModal(!signUpModal);
  };

  const handleVerifyModal = () => {
    setVerifyModal(!verifyModal);
  };

  const handleLogin = () => {
    if (data && data?.accessToken) {
      navigate(`/${routes.profile}?state=profile`);
    } else {
      handleLoginModal();
    }
  };

  const handleSignIn = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res.user);
    } catch (err) {
      console.log(err);
    }
  };

  const sendOtp = async (mobile) => {
    try {
      const recaptcha = new RecaptchaVerifier(auth, 'recaptcha', {});
      const confirmationOtp = await signInWithPhoneNumber(auth, mobile, recaptcha);
      if (confirmationOtp.verificationId) {
        setSender(mobile);
        setUser(confirmationOtp);
        handleLoginModal();
        handleVerifyModal();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const verifyOtp = async (otp) => {
    try {
      const verified = await user.confirm(otp);
      if (verified.user) {
        handleVerifyModal();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Dialog
        PaperProps={{
          style: {
            minWidth: '340px',
            padding: '50px 60px',
          },
        }}
        open={loginModal}
        onClose={() => {
          handleLoginModal();
        }}>
        <Login handleSignIn={handleSignIn} sendOtp={sendOtp} />
      </Dialog>
      <Dialog
        PaperProps={{
          style: {
            minWidth: '340px',
            padding: '50px 60px',
          },
        }}
        open={verifyModal}
        onClose={() => {
          handleVerifyModal();
        }}>
        <VerifyOTP sender={sender} verifyOtp={verifyOtp} handleLoginModal={handleLoginModal} handleVerifyModal={handleVerifyModal} />
      </Dialog>
      <Box component={'nav'} width={'100%'}>
        <Box component={'div'} className={classes.offerBg}>
          <Typography variant='smallThin' color={'#FFFFFF'} component={'h6'} textAlign={'center'}>
            Fresher Summer Sale! Get Upto 50% OFF. Use Code SUMMER50. Order Now 🎉
          </Typography>
        </Box>
        <Box component={'div'} className={classes.headerLayout}>
          <Box component={'div'} className={`${classes.flexCenter} ${classes.containerLayout}`}>
            <Box component={'div'} className={classes.flexCenter} gap={'72px'}>
              <SearchIcon sx={{ height: '20px', width: '20px' }} />
              <Typography
                variant='smallRegular'
                className='cursor-pointer'
                component={'h6'}
                color={'#0C0F04'}
                onClick={() => {
                  navigate(routes.about);
                }}>
                About Us
              </Typography>
            </Box>
            <Box
              component={'img'}
              src={logo}
              className={`cursor-pointer ${classes.logoStyles}`}
              onClick={() => {
                navigate(routes.home);
              }}
            />
            <Box component={'div'} className={classes.flexCenter} gap={'36px'}>
              <Link to={`/cart`} style={{ textDecoration: 'none' }}>
                <Badge color='primary' badgeContent={4} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} className={classes.customBadge}>
                  <LocalMallOutlinedIcon sx={{ height: '18px', width: '18px' }} />
                </Badge>
              </Link>
              <IconButton
                className={classes.iconButton}
                onClick={() => {
                  handleLogin();
                }}>
                <PersonOutlinedIcon sx={{ height: '16px', width: '16px', color: '#424C23' }} />
              </IconButton>
            </Box>
          </Box>
          <Box component={'div'} className={`${classes.flexCenter} ${classes.containerLayoutII}`}>
            {products.map((items, index) => {
              return (
                <Typography
                  variant='smallRegular'
                  component={'h6'}
                  color={'#0C0F04'}
                  sx={{ cursor: 'pointer' }}
                  key={index}
                  onClick={() => {
                    navigate(`/${routes.product}?category=${encodeURIComponent(items.toLowerCase())}`);
                  }}>
                  {items}
                </Typography>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
