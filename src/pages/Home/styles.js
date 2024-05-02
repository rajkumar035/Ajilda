import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  homeBanner: {
    height: '80vh',
    width: '100%',
    objectFit: 'cover',
    position: 'absolute',
    zIndex: '-1',
    transform: 'scaleX(-1)',
  },
  bannerContainer: {
    width: '30%',
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '110px',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  contentBg: {
    height: '140px',
    width: '100%',
    objectFit: 'cover',
    position: 'absolute',
    zIndex: '-1',
  },
  contentParentLayout: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    height: '140px',
  },
  leafStyle: {
    height: '130px',
    width: 'auto',
    objectFit: 'contain',
    position: 'absolute',
    top: 0,
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  contentIcon: {
    height: '45px',
    width: '45px',
  },
}));
