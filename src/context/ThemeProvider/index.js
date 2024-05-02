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
            maxWidth: '250px',
            textTransform: 'unset',
            fontSize: '16px',
            borderRadius: '12px',
            padding: '10px',
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
