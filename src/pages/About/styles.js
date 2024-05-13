import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  homeBanner: {
    height: '80vh',
    width: '100%',
    objectFit: 'cover',
    position: 'absolute',
    zIndex: '-1',
    transform: 'scaleX(-1)',
  },
  homeHeading: {
    fontSize: '54px !important',
    fontWeight: '400 !important',
    color: '#fff !important',
    lineHeight: '4rem !important',
    fontFamily: 'DM Serif Display !important',
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
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
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
  padding100: {
    padding: '100px',
  },
  containerHeading: {
    fontSize: '36px !important',
    fontWeight: '400 !important',
    fontFamily: 'DM Serif Display !important',
    color: '#000 !important',
    textAlign: 'center !important',
  },
  offerContentHeading: {
    fontSize: '24px !important',
    fontWeight: '700 !important',
    fontFamily: 'Inter !important',
    color: '#0F1405 !important',
  },
  soldBannerHeading: {
    fontSize: '85px !important',
    fontWeight: '400 !important',
    color: '#B89354 !important',
    fontFamily: 'DM Serif Display !important',
  },
}));
