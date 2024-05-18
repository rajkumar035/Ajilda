import { Box, Chip, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import Home from '../../assets/Images/Home.jfif';
import ProductCard from '../../components/ProductCard';
import Footer from '../../components/Footer';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
  const classes = useStyles();
  const [searchParams, setSearchParams] = useSearchParams();
  const getCategory = searchParams.get('category');
  const getUse = searchParams.get('use');

  const [productStatus, setProductStatus] = useState();
  const [productUse, setProductUse] = useState();

  console.log(setSearchParams, productUse);
  useEffect(() => {
    setProductStatus(getCategory ? decodeURIComponent(getCategory) : 'Bath & Body');
    setProductUse(getUse ? decodeURIComponent(getUse) : 'All');
  }, [getCategory, getUse]);

  const productList = [
    {
      img: Home,
      title: 'Goat Milk Soap',
      description: 'Transformational treatments with dermo-purifying',
      offer: 12,
      reviews: [{ title: 'Check', Author: 'Check' }],
      rating: '4.5',
      actualPrice: 349.0,
      status: 'Best seller',
      category: 'Body',
      condition: 'Oily Skin',
    },
    {
      img: Home,
      title: 'Donkey Milk Soap',
      description: 'Transformational treatments with dermo-purifying blends',
      offer: 20,
      reviews: [{ title: 'Check', Author: 'Check' }],
      rating: '4.5',
      actualPrice: 399.0,
      status: 'Sold out',
      category: 'Body',
      condition: 'Dry Skin',
    },
    {
      img: Home,
      title: 'Shampoo',
      description: 'Transformational treatments with dermo-purifying blends',
      offer: 12,
      reviews: [{ title: 'Check', Author: 'Check' }],
      rating: '4.5',
      actualPrice: 499.0,
      status: 'Most Searched',
      category: 'Hair',
    },
    {
      img: Home,
      title: 'Hair Serum',
      description: 'Transformational treatments with dermo-purifying blends',
      offer: 8,
      reviews: [{ title: 'Check', Author: 'Check' }],
      rating: '4.5',
      actualPrice: 699.0,
      category: 'Hair',
    },
  ];
  const comboProductList = [
    {
      img: Home,
      title: 'Goat Milk Soap',
      subTitle: 'Combo pack of 2',
      description: 'Transformational treatments with dermo-purifying',
      offer: 12,
      reviews: [{ title: 'Check', Author: 'Check' }],
      rating: '4.5',
      actualPrice: 349.0,
      status: 'Best seller',
      category: 'Body',
      condition: 'Oily Skin',
    },
    {
      img: Home,
      title: 'Donkey Milk Soap',
      subTitle: 'Combo pack of 2',
      description: 'Transformational treatments with dermo-purifying blends',
      offer: 20,
      reviews: [{ title: 'Check', Author: 'Check' }],
      rating: '4.5',
      actualPrice: 399.0,
      status: 'Sold out',
      category: 'Body',
      condition: 'Dry Skin',
    },
  ];

  return (
    <Box component={'section'}>
      <Box component={'div'} padding={'30px 100px 120px 100px'} className={classes.flexColumn} gap={'30px'}>
        <Box component={'div'} className={classes.flexEnd} gap={'4px'}>
          <Typography component={'h6'} variant='mediumRegular' textTransform={'capitalize'} color={'#0C0F04'}>
            {productStatus}
          </Typography>
          <Typography component={'h6'} variant='smallThin' color={'#B5B5B5'}>
            ({productList.length} results)
          </Typography>
        </Box>
        <Box component={'div'} className={classes.flexCenter} gap={'16px'}>
          {[1, 2, 3, 4].map((items, index) => {
            return (
              <Chip
                key={index}
                className={classes.customChip}
                label={
                  <Typography color={'#192108'} variant='smallRegular' component={'label'}>
                    Oily Skin
                  </Typography>
                }
              />
            );
          })}
        </Box>
        <Grid container spacing={4}>
          {productList.map((items, index) => {
            return (
              <Grid item lg={3} md={6} sm={12} key={index}>
                <ProductCard {...items} />
              </Grid>
            );
          })}
        </Grid>
        <Box component={'div'} className={classes.flexEnd} gap={'4px'}>
          <Typography component={'h6'} variant='mediumRegular' color={'#0C0F04'}>
            Relevant combos
          </Typography>
          <Typography component={'h6'} variant='smallThin' color={'#B5B5B5'}>
            ({comboProductList.length} results)
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {comboProductList.map((items, index) => {
            return (
              <Grid item lg={3} md={6} sm={12} key={index}>
                <ProductCard {...items} />
              </Grid>
            );
          })}
        </Grid>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Products;
