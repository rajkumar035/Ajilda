import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  logoStyles: {
    height: '50px',
    width: 'auto',
    marginBottom: '60px',
  },
  seperator: {
    height: '16px',
    width: '1px',
    background: '#424C23',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  padding100: {
    padding: '60px 100px',
  },
}));
