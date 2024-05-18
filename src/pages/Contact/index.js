import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PublicSharpIcon from '@mui/icons-material/PublicSharp';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { useStyles } from './styles';
import EastIcon from '@mui/icons-material/East';

const Contact = () => {
  const classes = useStyles();

  return (
    <Box component={'section'} className={classes.contactBgStyles}>
      <Box component={'div'} className={classes.contactBgLayout}>
        <Box component={'div'} className={`${classes.flexColumn} ${classes.contactLayout}`}>
          <Typography className={classes.contactHeading}>Have queries? Talk to us now!</Typography>
          <Grid container lg={12} spacing={16}>
            <Grid item lg={5.5}>
              <Box component={'div'} className={`${classes.flexColumn} ${classes.contactLeftContainer}`}>
                <Box component={'div'} gap={'24px'} padding={'60px 32px'} className={classes.flexColumn}>
                  <Box component={'div'} gap={'16px'} className={classes.flexCenter}>
                    <EmailOutlinedIcon className={classes.contactIcon} />
                    <Typography variant='smallThin' color={'#141A06'}>
                      info@yourdomain.com
                    </Typography>
                  </Box>
                  <Box component={'div'} gap={'16px'} className={classes.flexCenter}>
                    <LocalPhoneOutlinedIcon className={classes.contactIcon} />
                    <Typography variant='smallThin' color={'#141A06'}>
                      +1 (378) 400-1234
                    </Typography>
                  </Box>
                  <Box component={'div'} gap={'16px'} className={classes.flexCenter}>
                    <PublicSharpIcon className={classes.contactIcon} />
                    <Typography variant='smallThin' color={'#141A06'}>
                      www.yourdomain.com
                    </Typography>
                  </Box>
                </Box>
                <Box component={'div'} gap={'35px'} padding={'60px 32px'} className={classes.flexCenter}>
                  <FaFacebookF fontSize={'18px'} color='#424C23' />
                  <FaLinkedinIn fontSize={'18px'} color='#424C23' />
                  <FaInstagram fontSize={'18px'} color='#424C23' />
                </Box>
              </Box>
            </Grid>
            <Grid item lg={6.5}>
              <Box component={'form'} className={classes.flexColumn} gap={'50px'}>
                <TextField
                  variant='standard'
                  fullWidth
                  label='Full name'
                  InputLabelProps={{
                    classes: { root: classes.inputLabel },
                  }}
                  className={classes.inputStyles}
                />
                <TextField
                  variant='standard'
                  fullWidth
                  label='Phone number'
                  InputLabelProps={{
                    classes: { root: classes.inputLabel },
                  }}
                  className={classes.inputStyles}
                />
                <TextField
                  variant='standard'
                  fullWidth
                  label='Email'
                  InputLabelProps={{
                    classes: { root: classes.inputLabel },
                  }}
                  className={classes.inputStyles}
                />
                <TextField
                  variant='standard'
                  rows={7}
                  multiline
                  fullWidth
                  label='Hello I would like to know about...'
                  InputLabelProps={{
                    classes: { root: classes.inputLabel },
                  }}
                  className={classes.inputStyles}
                />
                <Button fullWidth variant='contained' color='secondary' sx={{ padding: '9px' }} endIcon={<EastIcon />}>
                  Send now
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
