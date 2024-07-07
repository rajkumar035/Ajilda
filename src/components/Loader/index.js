import { Box, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles(() => ({
  loaderContainer: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: "absolute",
    zIndex: "999999999999999999999999999",
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
