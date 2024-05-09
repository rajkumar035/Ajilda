import { Box, Button, Chip, Typography } from '@mui/material';
import React from 'react';
import Home from '../../Assets/Images/Home.jfif';
import StarIcon from '@mui/icons-material/Star';
import success from '../../Assets/Icons/Success.png';

const ProductCard = () => {
  return (
    <Box width={'100%'} component={'div'}>
      <Box component={'div'} position={'relative'}>
        <Box component={'img'} src={Home} width={'100%'} height={'240px'} sx={{ objectFit: 'cover', borderRadius: '12px' }} />
      </Box>
      <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '10px 0px' }}>
        <Box component={'div'} sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <Typography component={'h6'} color={'#141A06'} variant='mediumRegular'>
            Face serum
          </Typography>
          <Typography component={'h6'} color={'#424C23'} variant='smallRegular'>
            Face serum
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '10px' }} component={'div'}>
          <Typography component={'h6'} variant='largeBold' fontWeight={'700'} marginTop={'-3'} color={'#424C23'}>
            $299
          </Typography>
          <Typography component={'h6'} sx={{ textDecoration: 'line-through' }} variant='extraSmallBold' color={'#B5B5B5'}>
            $399
          </Typography>
          <Chip
            sx={{ background: '#FBEAEA', borderRadius: '100px', '& .MuiChip-label': { padding: '10px' } }}
            label={
              <Typography component={'caption'} sx={{ fontSize: '12px', fontWeight: '700', color: '#C02B2B', fontFamily: 'Inter' }}>
                12% off
              </Typography>
            }
          />
        </Box>
        <Box component={'div'} sx={{ display: 'flex', gap: '8px' }}>
          <Box component={'div'} sx={{ display: 'flex', gap: '3px' }}>
            <StarIcon sx={{ color: '#FFC300' }} fontSize='16px' />
            <Typography component={'label'} variant='smallThin' color={'#192108'}>
              4.5
            </Typography>
          </Box>
          |
          <Box component={'div'} sx={{ display: 'flex', gap: '3px' }}>
            <Box component={'img'} src={success} height={'16px'} width={'16px'} />
            <Typography component={'label'} variant='smallThin' color={'#192108'}>
              118 Reviews
            </Typography>
          </Box>
        </Box>
        <Button variant='contained' color='primary' sx={{ padding: '6px', borderRadius: '6px' }} fullWidth>
          Add to cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCard;
