import { Box, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
  loaderContainer: {
    height: '82vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0, 0, 0, 0.4)',
  },
}));

const Loader = () => {
  const classes = useStyles();

  return (
    <Box component={'div'} className={classes.loaderContainer}>
      <CircularProgress sx={{ color: '#56642E' }} />
    </Box>
  );
};

export default Loader;
