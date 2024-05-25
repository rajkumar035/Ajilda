import { Box, Typography } from '@mui/material';
import React from 'react';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { useStyles } from '../../styles';
import category1 from '../../../../asset/Images/category1.jfif';
import category2 from '../../../../asset/Images/category2.jfif';
import category3 from '../../../../asset/Images/category3.png';
import category4 from '../../../../asset/Images/category4.png';
import category5 from '../../../../asset/Images/category5.jfif';
import { useNavigate } from 'react-router-dom';
import routes from '../../../../utils/routes.json';

const CategoryCards = (props) => {
  const { index } = props;
  const classes = useStyles();
  const navigate = useNavigate();

  const categoryList = [
    {
      title: 'For Oily Skin',
      data: 'oily skin',
      link: '',
      image: category1,
    },
    {
      title: 'For Dry Skin',
      data: 'dry skin',
      link: '',
      image: category5,
    },
    {
      title: 'For Normal Skin',
      link: '',
      data: 'normal skin',
      image: category4,
    },
    {
      title: 'For combination Skin',
      link: '',
      data: 'combination skin',
      image: category3,
    },
    {
      title: 'For Normal Skin',
      link: '',
      data: 'normal skin',
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
            navigate(`/${routes.product}?use=${encodeURIComponent(categoryList[index].data)}`);
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
