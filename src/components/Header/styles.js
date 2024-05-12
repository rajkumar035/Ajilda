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
  headerLayout: {
    padding: '0px 100px',
    boxShadow: '0px 4px 30px 0px #7272721A',
  },
  iconButton: {
    padding: '12px',
    background: '#E0E8CA !important',
    borderRadius: '50%',
  },
}));
