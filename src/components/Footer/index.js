import React from 'react';
import { useStyles } from './styles';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/PNG's/logo.png";

const Footer = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const shopFor = ['Soap', 'Serum', 'M Cream', 'Shampoo', 'Facewash', 'Lip balm', 'Hair oil', 'Perfume'];
  const links = [
    { label: "FAQ's", link: '/' },
    { label: 'Legal', link: '/' },
    { label: 'Order tracking', link: '/' },
    { label: 'Account', link: '/' },
    { label: 'Blogs', link: '/' },
  ];

  return (
    <Box component={'section'} bgcolor={'#F5F8EE'}>
      <Box component={'div'} className={classes.padding100}>
        <Box component={'img'} src={logo} className={classes.logoStyles} />
        <Box component={'div'} display={'flex'} gap={'150px'}>
          <Box component={'div'} gap={'36px'} className={classes.flexColumn}>
            <Box component={'div'} gap={'12px'} className={classes.flexColumn}>
              <Typography variant='largeBold' sx={{ fontWeight: '700' }} component={'h6'} color={'#56642E'}>
                Shop for
              </Typography>
              <Box component={'div'} sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                {shopFor.map((items, index) => {
                  return (
                    <>
                      <Typography variant='mediumThin' component={'h6'} color={'#424C23'}>
                        {items}
                      </Typography>
                      {shopFor.length - 1 !== index && <Box component={'div'} className={classes.seperator} />}
                    </>
                  );
                })}
              </Box>
            </Box>
            <Box component={'div'} gap={'12px'} className={classes.flexColumn}>
              <Typography variant='largeBold' sx={{ fontWeight: '700' }} component={'h6'} color={'#56642E'}>
                Useful links
              </Typography>
              <Box component={'div'} sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                {links.map((items, index) => {
                  return (
                    <>
                      <Typography
                        variant='mediumThin'
                        component={'h6'}
                        color={'#424C23'}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                          navigate(items.link);
                        }}>
                        {items.label}
                      </Typography>
                      {links.length - 1 !== index && <Box component={'div'} className={classes.seperator} />}
                    </>
                  );
                })}
              </Box>
            </Box>
          </Box>
          <Box component={'div'} gap={'36px'} className={classes.flexColumn}>
            <Box component={'div'} gap={'12px'} className={classes.flexColumn}>
              <Typography variant='largeBold' sx={{ fontWeight: '700' }} component={'h6'} color={'#56642E'}>
                Contact us
              </Typography>
              <Typography variant='mediumThin' component={'h6'} color={'#424C23'}>
                +91 9495496623
              </Typography>
              <Typography variant='mediumThin' component={'h6'} color={'#424C23'}>
                contact@ajilda.com
              </Typography>
            </Box>
            <Box component={'div'} gap={'12px'} className={classes.flexColumn}>
              <Typography variant='largeBold' sx={{ fontWeight: '700' }} component={'h6'} color={'#56642E'}>
                Office address
              </Typography>
              <Typography variant='mediumThin' component={'h6'} color={'#424C23'}>
                Ajilda head office, Tuticorin-685612
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box component={'div'} borderTop={'1px solid #8EA64C'}>
        <Box component={'div'} padding={'20px 100px'}>
          <Box component={'div'} className={classes.flexCenter} gap={'10px'}>
            <Typography variant='mediumThin' color={'#424C23'} component={'h6'}>
              All rights reserved
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
