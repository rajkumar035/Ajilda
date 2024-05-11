import { makeStyles } from '@mui/styles';
import staticBg from "../../Assets/PNG's/SttaicBG.png";

export const useStyles = makeStyles((theme) => ({
  homeBanner: {
    height: '80vh',
    width: '100%',
    objectFit: 'cover',
    position: 'absolute',
    zIndex: '-1',
    transform: 'scaleX(-1)',
  },
  homeHeading: {
    fontSize: '65px !important',
    fontWeight: '400 !important',
    color: '#fff !important',
    lineHeight: '5rem !important',
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
  padding100: {
    padding: '100px',
  },
  containerHeading: {
    fontSize: '42px !important',
    fontWeight: '400 !important',
    fontFamily: 'DM Serif Display !important',
    color: '#000 !important',
    textAlign: 'center !important',
  },
  cardContainer: {
    background: '#F5F8EE',
    padding: '60px',
    gap: '250px',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '25px',
  },
  cardContainerHeading: {
    fontSize: '60px !important',
    fontWeight: '400 !important',
    fontFamily: 'DM Serif Display !important',
  },
  staticContainerBg: {
    background: `url(${staticBg})`,
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    padding: '50px 0px',
    position: 'relative',
  },
  staticContainerBgLayout: {
    background: 'rgba(0, 0, 0, 0.4)',
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: '0',
    top: 0,
  },
  staticContainerContentLayout: {
    gap: '60px',
    margin: '150px auto',
    width: '35%',
    alignItems: 'center',
  },
  staticContainerHeading: {
    fontSize: '60px !important',
    fontWeight: '400 !important',
    fontFamily: 'DM Serif Display !important',
    color: '#fff !important',
    textAlign: 'center !important',
    zIndex: '1 !important',
  },
  categoryCardContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
    boxShadow: 'inset 0rem -10rem 8rem -5rem rgba(0, 0, 0, 0.6)',
    borderRadius: '12px',
  },
  categoryCardContainerImgBanner: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: '12px',
    objectPosition: 'top',
    zIndex: '-1',
  },
  categoryCardContainerTextLayout: {
    position: 'absolute',
    gap: '12px',
    bottom: '20px',
    left: '20px',
  },
  categoryCardContainerText: {
    fontFamily: 'DM Serif Display !important',
    fontWeight: '400 !important',
    fontSize: '38px !important',
    color: '#fff !important',
  },
  categoryCardContainerLink: {
    fontFamily: 'Inter !important',
    fontWeight: '400 !important',
    fontSize: '28px !important',
    color: '#fff !important',
  },
  deliveryCardContainerLayout: {
    height: '100%',
    width: '100%',
    background: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 'auto 20px',
  },
  deliveryCardContainerText: {
    fontSize: '60px !important',
    fontWeight: '400 !important',
    fontFamily: 'DM Serif Display !important',
    color: '#fff !important',
  },
}));
