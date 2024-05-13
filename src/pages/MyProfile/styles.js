import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  tabHeaderFooter: {
    height: '4px',
    width: '24px',
    background: '#6F813C',
  },
  tabContainer: {
    paddingLeft: '50px',
    paddingTop: '30px',
    borderLeft: '1px solid #E8E8E8',
    height: '66vh',
    overflow: 'auto',
  },
}));
