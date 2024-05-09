import { Box, Typography } from '@mui/material';
import React from 'react';
import category1 from '../../../../Assets/Images/category1.jfif';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { useStyles } from '../../styles';

const CategoryCards = () => {
  const classes = useStyles();

  return (
    <Box component={'div'} className={classes.categoryCardContainer}>
      <Box component={'img'} src={category1} className={`${classes.categoryCardContainerImgBanner} img-cover`} />
      <Box component={'div'} className={`${classes.flexColumn} ${classes.categoryCardContainerTextLayout}`}>
        <Typography className={classes.categoryCardContainerText} component={'h6'}>
          For Oily Skin
        </Typography>
        <Box component={'div'} className={classes.flexCenter}>
          <Typography className={classes.categoryCardContainerLink} component={'h6'}>
            View Collection
          </Typography>
          <TrendingFlatIcon sx={{ color: '#fff' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryCards;
