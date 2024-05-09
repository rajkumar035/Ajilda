import { ThemeProvider, createTheme } from '@mui/material';
import React from 'react';

const ReactThemeProvider = ({ children }) => {
  const Theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          containedPrimary: {
            background: '#56642E',
            color: '#FFFFFF',
            textTransform: 'unset',
            fontSize: '20px',
            fontWeight: '500',
            borderRadius: '12px',
            padding: '16px',
            '&:hover': {
              background: '#56642E',
              boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),4px 6px 5px 0px rgba(0,0,0,0.12)',
            },
          },
          containedSecondary: {
            background: '#76551D',
            color: '#FFFFFF',
            textTransform: 'unset',
            fontSize: '20px',
            fontWeight: '500',
            borderRadius: '12px',
            padding: '16px',
            '&:hover': {
              background: '#76551D',
              boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),4px 6px 5px 0px rgba(0,0,0,0.12)',
            },
          },
          outlinedPrimary: {
            color: '#FFFFFF',
            textTransform: 'unset',
            fontSize: '20px',
            fontWeight: '500',
            borderRadius: '12px',
            padding: '16px',
            border: '1px solid #fff',
            '&:hover': {
              border: '1px solid #fff',
            },
          },
        },
      },
      MuiTypography: {
        variants: [
          { props: { variant: 'extraSmallThin' }, style: { fontSize: '14px', fontWeight: '400' } },
          { props: { variant: 'extraSmallRegular' }, style: { fontSize: '14px', fontWeight: '500' } },
          { props: { variant: 'extraSmallBold' }, style: { fontSize: '14px', fontWeight: '600' } },
          { props: { variant: 'smallThin' }, style: { fontSize: '16px', fontWeight: '400' } },
          { props: { variant: 'smallRegular' }, style: { fontSize: '16px', fontWeight: '500' } },
          { props: { variant: 'smallBold' }, style: { fontSize: '16px', fontWeight: '600' } },
          { props: { variant: 'mediumThin' }, style: { fontSize: '20px', fontWeight: '400' } },
          { props: { variant: 'mediumRegular' }, style: { fontSize: '20px', fontWeight: '500' } },
          { props: { variant: 'mediumBold' }, style: { fontSize: '20px', fontWeight: '600' } },
          { props: { variant: 'largeThin' }, style: { fontSize: '24px', fontWeight: '400' } },
          { props: { variant: 'largeRegular' }, style: { fontSize: '24px', fontWeight: '500' } },
          { props: { variant: 'largeBold' }, style: { fontSize: '24px', fontWeight: '600' } },
        ],
      },
    },
  });
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

export default ReactThemeProvider;
