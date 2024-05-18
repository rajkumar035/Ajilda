import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  logoStyles: {
    height: '40px',
    width: 'auto',
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  containerLayoutII: {
    justifyContent: 'center',
    gap: '72px',
    padding: '20px',
  },
  containerLayout: {
    padding: '20px 40px',
    justifyContent: 'space-between',
    borderBottom: '1px solid #B9BBB3',
  },
  headerLayout: {
    padding: '0px 60px',
    boxShadow: '0px 4px 30px 0px #7272721A',
  },
  iconButton: {
    padding: '12px',
    background: '#E0E8CA !important',
    borderRadius: '50%',
  },
  customBadge: {
    '& .MuiBadge-badge': {
      color: '#fff',
      backgroundColor: '#0C0F04',
      fontSize: '8px',
      fontFamily: 'Inter',
    },
  },
  offerBg: {
    width: '100%',
    padding: '6px',
    background: '#D32F2F',
  },
}));
