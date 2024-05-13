import { Badge, Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../../assets/PNG's/logo.png";
import { useStyles } from './styles';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { useNavigate } from 'react-router-dom';
import routes from '../../utils/routes.json';

const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box component={'nav'} className={classes.headerLayout}>
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
          <Badge color='primary' badgeContent={4} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} className={classes.customBadge}>
            <LocalMallOutlinedIcon sx={{ height: '18px', width: '18px' }} />
          </Badge>
          <IconButton
            className={classes.iconButton}
            onClick={() => {
              navigate(routes.profile);
            }}>
            <PersonOutlinedIcon sx={{ height: '16px', width: '16px', color: '#424C23' }} />
          </IconButton>
        </Box>
      </Box>
      <Box component={'div'} className={`${classes.flexCenter} ${classes.containerLayoutII}`}>
        <Typography variant='smallRegular' component={'h6'} color={'#0C0F04'}>
          Bath & Body
        </Typography>
        <Typography variant='smallRegular' component={'h6'} color={'#0C0F04'}>
          Face
        </Typography>
        <Typography variant='smallRegular' component={'h6'} color={'#0C0F04'}>
          Hair Care
        </Typography>
        <Typography variant='smallRegular' component={'h6'} color={'#0C0F04'}>
          Combos
        </Typography>
        <Typography variant='smallRegular' component={'h6'} color={'#0C0F04'}>
          Gifts
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
