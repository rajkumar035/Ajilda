import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import EastIcon from '@mui/icons-material/East';
import { useNavigate, useSearchParams } from 'react-router-dom';
import routes from '../../utils/routes.json';
import success from '../../assets/Images/success.jpg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    height: '78vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Response = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [searchParam, setSearchParams] = useSearchParams();

  const title = searchParam.get('message');
  const subTitle = searchParam.get('desc');

  return (
    <Box component={'section'} className={classes.container}>
      <Box component={'div'} className={classes.flexColumn} gap={'100px'}>
        <Box component={'div'} className={classes.flexColumn} gap={'60px'} width={'500px'} alignItems={'center'}>
          <Box component={'img'} src={success} alt='icon' height={'80px'} width={'80px'} />
          <Box component={'div'} className={classes.flexColumn} gap={'10px'} alignItems={'center'}>
            <Typography variant='largeRegular' component={'h6'} color={'#0F1405'}>
              {decodeURIComponent(title)}
            </Typography>
            <Typography variant='smallThin' component={'h6'} color={'#676C5A'} textAlign={'center'}>
              {decodeURIComponent(subTitle)}
            </Typography>
          </Box>
        </Box>
        <Button
          onClick={() => {
            navigate(`/${routes.product}`);
          }}
          variant='contained'
          color='primary'
          fullWidth
          endIcon={<EastIcon color='#fff' />}>
          Explore other products
        </Button>
      </Box>
    </Box>
  );
};

export default Response;
