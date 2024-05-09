import { Box, Typography } from '@mui/material';
import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import Testimonial1 from "../../Assets/PNG's/Testimonials.png";
import Success from '../../Assets/Icons/successCircle.png';

const TestimonialCards = () => {
  return (
    <Box component={'div'} sx={{ position: 'relative', background: `url(${Testimonial1})`, width: '100%', height: '500px', backgroundSize: 'cover', boxShadow: 'inset 0rem -14rem 7rem -7rem rgba(0, 0, 0, 0.6)', borderRadius: '12px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px', position: 'absolute', bottom: '18px', left: '24px' }}>
        <Typography sx={{ fontSize: '28px', fontWeight: '600', color: '#FFFFFF' }} component={'h6'}>
          Christina Smith
        </Typography>
        <StarIcon sx={{ color: '#FFC300', height: '22px' }} />
        <Typography component={'label'} variant='largeRegular' color={'#FFFFFF'}>
          4.5
        </Typography>
        <Box sx={{ height: '16px', width: '1px', background: '#8C8C8C' }} />
        <Box component={'img'} src={Success} sx={{ objectFit: 'contain', height: '22px', width: 'auto' }} />
      </Box>
    </Box>
  );
};

export default TestimonialCards;
