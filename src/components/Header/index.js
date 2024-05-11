import { Badge, Box, IconButton, Typography } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../../Assets/PNG's/logo.png";
import { useStyles } from './styles';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Header = () => {
  const classes = useStyles();

  return (
    <Box component={'nav'} padding={'0px 100px'} boxShadow={'0px 4px 30px 0px #7272721A'}>
      <Box component={'div'} className={`${classes.flexCenter} ${classes.containerLayout}`}>
        <Box component={'div'} className={classes.flexCenter} gap={'72px'}>
          <SearchIcon sx={{ height: '28px', width: '28px' }} />
          <Typography variant='smallRegular' component={'h6'} color={'#0C0F04'}>
            About Us
          </Typography>
        </Box>
        <Box component={'img'} src={logo} className={classes.logoStyles} />
        <Box component={'div'} className={classes.flexCenter} gap={'36px'}>
          <Badge color='primary' badgeContent={4} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
            <LocalMallOutlinedIcon sx={{ height: '24px', width: '24px' }} />
          </Badge>
          <IconButton sx={{ padding: '12px', background: '#E0E8CA', borderRadius: '50%' }}>
            <PersonOutlinedIcon sx={{ height: '18px', width: '18px' }} />
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
