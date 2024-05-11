import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  logoStyles: {
    height: '50px',
    width: 'auto',
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  containerLayoutII: {
    justifyContent: 'center',
    gap: '72px',
    padding: '25px',
  },
  containerLayout: {
    padding: '25px',
    justifyContent: 'space-between',
    borderBottom: '1px solid #B9BBB3',
  },
}));
