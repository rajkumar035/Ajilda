import { Box, Button, Chip, Tooltip, Typography } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import success from '../../assets/Icons/Success.png';
import { useStyles } from './styles';
import { shrinkTextBased } from '../../utils/helperFunctions';
import { useNavigate } from 'react-router-dom';
import routes from '../../utils/routes.json';

const ProductCard = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { img, title, description, offer, reviews, rating, actualPrice, status, subTitle } = props;
  const titleLimit = subTitle ? 15 : 30;
  const subTitleLimit = 15;

  const getTagColor = (status) => {
    switch (status) {
      case 'Best seller':
        return '#C02B2B';
      case 'Sold out':
        return '#0C0F04';
      case 'Most Searched':
        return '#007DC4';
      default:
        break;
    }
  };

  const ProductTitle = () => {
    return (title || '').length > titleLimit ? (
      <Tooltip title={title}>
        <Typography component={'h6'} color={'#141A06'} variant='mediumRegular'>
          {shrinkTextBased(titleLimit, title)}
        </Typography>
      </Tooltip>
    ) : (
      <Typography component={'h6'} color={'#141A06'} variant='mediumRegular'>
        {title}
      </Typography>
    );
  };

  return (
    <Box width={'100%'} component={'div'} sx={{ opacity: status === 'Sold out' ? '80%' : '100%' }}>
      <Box component={'div'} position={'relative'}>
        <Box component={'img'} src={img} className={`img-cover ${classes.bannerImg}`} />
        {status && (
          <Chip
            className={classes.customChipTag}
            sx={{ background: getTagColor(status) }}
            label={
              <Typography variant='extraSmallBold' color={'#fff'} component={'h6'}>
                {status}
              </Typography>
            }
          />
        )}
      </Box>
      <Box component={'div'} className={classes.flexColumn} gap={'16px'} padding={'10px 0px'}>
        <Box component={'div'} className={classes.flexColumn} gap={'10px'}>
          {!subTitle ? (
            <ProductTitle />
          ) : (
            <Box component={'div'} className={classes.flexEnd} gap={'8px'}>
              <ProductTitle />
              <Typography variant='smallRegular' color={'#6B6B6B'} component={'h6'}>
                ( {shrinkTextBased(subTitleLimit, subTitle)} )
              </Typography>
            </Box>
          )}
          <Typography className={classes.descriptionStyle} component={'h6'} variant='smallThin'>
            {shrinkTextBased(80, description)}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '10px' }} component={'div'}>
          <Typography component={'h6'} variant='largeBold' fontWeight={'700'} marginTop={'-3'} color={'#424C23'}>
            ${offer ? Math.round(actualPrice - (actualPrice / 100) * offer) : actualPrice}
          </Typography>
          <Typography component={'h6'} sx={{ textDecoration: 'line-through' }} variant='extraSmallBold' color={'#B5B5B5'}>
            {actualPrice}
          </Typography>
          <Chip
            className={classes.customChip}
            label={
              <Typography component={'label'} variant='extraSmallExtraBold' color={'#C02B2B'}>
                ${offer}% off
              </Typography>
            }
          />
        </Box>
        <Box component={'div'} sx={{ display: 'flex', gap: '8px' }}>
          <Box component={'div'} sx={{ display: 'flex', gap: '3px' }}>
            <StarIcon sx={{ color: '#FFC300' }} fontSize='16px' />
            <Typography component={'label'} variant='smallThin' color={'#192108'}>
              {rating}
            </Typography>
          </Box>
          |
          <Box component={'div'} sx={{ display: 'flex', gap: '3px' }}>
            <Box component={'img'} src={success} height={'16px'} width={'16px'} />
            <Typography component={'label'} variant='smallThin' color={'#192108'}>
              {(reviews || []).length} Reviews
            </Typography>
          </Box>
        </Box>
        <Button
          onClick={() => {
            navigate(`/${routes.productDetails}/${encodeURIComponent(title).toLowerCase()}`);
          }}
          sx={{ padding: '6px', borderRadius: '6px', cursor: status === 'Sold out' ? 'no-drop' : 'pointer' }}
          className='productCard_btn'
          variant='contained'
          color='primary'
          fullWidth
          endIcon={
            <svg width='60' height='20' viewBox='0 25 100 50' className='productCard_btn_icon'>
              <path d='M0,50 L100,50 L90,40 M100,50 L90,60' strokeWidth='4px' stroke='#fff' fill='none' />
            </svg>
          }>
          Add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
