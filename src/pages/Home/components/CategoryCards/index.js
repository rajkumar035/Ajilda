import { Box, Typography } from '@mui/material';
import React from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { useStyles } from '../../styles';
import category1 from '../../../../assets/Images/category1.jfif';
import category2 from '../../../../assets/Images/category2.jfif';
import category3 from '../../../../assets/Images/category3.png';
import category4 from '../../../../assets/Images/category4.png';
import category5 from '../../../../assets/Images/category5.jfif';
import { useNavigate } from 'react-router-dom';

const CategoryCards = (props) => {
  const { index } = props;
  const classes = useStyles();
  const navigate = useNavigate();

  const categoryList = [
    {
      title: 'For Oily Skin',
      link: '',
      image: category1,
    },
    {
      title: 'For Dry Skin',
      link: '',
      image: category5,
    },
    {
      title: 'For Normal Skin',
      link: '',
      image: category4,
    },
    {
      title: 'For combination Skin',
      link: '',
      image: category3,
    },
    {
      title: 'For Normal Skin',
      link: '',
      image: category2,
    },
  ];

  return (
    <Box component={'div'} className={classes.categoryCardContainer}>
      <Box component={'img'} src={categoryList[index].image} className={`${classes.categoryCardContainerImgBanner} img-cover`} />
      <Box component={'div'} className={`${classes.flexColumn} ${classes.categoryCardContainerTextLayout}`}>
        <Typography className={classes.categoryCardContainerText} component={'h6'}>
          {categoryList[index].title}
        </Typography>
        <Box
          component={'div'}
          className={`${classes.flexCenter} cursor-pointer`}
          onClick={() => {
            navigate('/');
          }}>
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
