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
            fontSize: '15px',
            fontWeight: '500',
            fontFamily: 'Inter',
            borderRadius: '12px',
            padding: '12px',
            minWidth: '135px',
            '&:hover': {
              background: '#56642E',
              boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),4px 6px 5px 0px rgba(0,0,0,0.12)',
            },
          },
          containedInfo: {
            background: '#D1DDB0',
            color: '#0F1405',
            textTransform: 'unset',
            fontSize: '15px',
            fontWeight: '500',
            fontFamily: 'Inter',
            borderRadius: '12px',
            minWidth: '135px',
            padding: '12px',
            '&:hover': {
              background: '#D1DDB0',
              boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),4px 6px 5px 0px rgba(0,0,0,0.12)',
            },
          },
          containedSecondary: {
            background: '#76551D',
            color: '#FFFFFF',
            textTransform: 'unset',
            fontSize: '15px',
            fontWeight: '500',
            borderRadius: '12px',
            fontFamily: 'Inter',
            minWidth: '135px',
            padding: '12px',
            '&:hover': {
              background: '#76551D',
              boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),4px 6px 5px 0px rgba(0,0,0,0.12)',
            },
          },
          containedSuccess: {
            background: '#C9B8B2',
            color: '#0F1405',
            textTransform: 'unset',
            fontSize: '15px',
            fontWeight: '500',
            minWidth: '135px',
            fontFamily: 'Inter',
            borderRadius: '12px',
            padding: '12px',
            '&:hover': {
              background: '#C9B8B2',
              boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),4px 6px 5px 0px rgba(0,0,0,0.12)',
            },
          },
          outlinedPrimary: {
            color: '#FFFFFF',
            textTransform: 'unset',
            fontSize: '15px',
            fontWeight: '500',
            minWidth: '135px',
            fontFamily: 'Inter',
            borderRadius: '12px',
            padding: '12px',
            border: '1px solid #fff',
            '&:hover': {
              border: '1px solid #fff',
            },
          },
        },
      },
      MuiTypography: {
        variants: [
          { props: { variant: 'extraSmallThin' }, style: { fontSize: '12px', fontWeight: '400' } },
          { props: { variant: 'extraSmallRegular' }, style: { fontSize: '12px', fontWeight: '500' } },
          { props: { variant: 'extraSmallBold' }, style: { fontSize: '12px', fontWeight: '600' } },
          { props: { variant: 'extraSmallExtraBold' }, style: { fontSize: '12px', fontWeight: '700' } },
          { props: { variant: 'smallThin' }, style: { fontSize: '14px', fontWeight: '400' } },
          { props: { variant: 'smallRegular' }, style: { fontSize: '14px', fontWeight: '500' } },
          { props: { variant: 'smallBold' }, style: { fontSize: '14px', fontWeight: '600' } },
          { props: { variant: 'smallExtraBold' }, style: { fontSize: '14px', fontWeight: '700' } },
          { props: { variant: 'mediumThin' }, style: { fontSize: '18px', fontWeight: '400' } },
          { props: { variant: 'mediumRegular' }, style: { fontSize: '18px', fontWeight: '500' } },
          { props: { variant: 'mediumBold' }, style: { fontSize: '18px', fontWeight: '600' } },
          { props: { variant: 'mediumExtraBold' }, style: { fontSize: '18px', fontWeight: '700' } },
          { props: { variant: 'largeThin' }, style: { fontSize: '22px', fontWeight: '400' } },
          { props: { variant: 'largeRegular' }, style: { fontSize: '22px', fontWeight: '500' } },
          { props: { variant: 'largeBold' }, style: { fontSize: '22px', fontWeight: '600' } },
          { props: { variant: 'largeExtraBold' }, style: { fontSize: '22px', fontWeight: '700' } },
        ],
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            padding: '24px 30px',
            borderRadius: '24px',
            minWidth: '450px',
          },
        },
      },
    },
  });
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

export default ReactThemeProvider;
