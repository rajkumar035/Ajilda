import { makeStyles } from '@mui/styles';
import ContactBg from "../../Assets/PNG's/ContactBg.png";

export const useStyles = makeStyles(() => ({
  contactBgStyles: {
    width: '100%',
    background: `url(${ContactBg})`,
  },
  contactBgLayout: {
    background: 'rgba(246, 242, 234, 0.7) !important',
    padding: '84px 0px',
  },
  contactLayout: {
    width: '60%',
    gap: '72px',
    margin: '0px auto',
  },
  contactHeading: {
    fontSize: '50px !important',
    fontWeight: '400 !important',
    color: '#292F36 !important',
    fontFamily: 'DM Serif Display !important',
    textAlign: 'center !important',
  },
  contactLeftContainer: {
    justifyContent: 'space-between',
    background: '#D6C19D',
    borderRadius: '24px',
    height: '100%',
  },
  contactIcon: {
    height: '24px',
    width: 'auto',
    color: '#B89354',
    background: '#FFFFFF',
    padding: '14px',
    borderRadius: '50%',
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  padding100: {
    padding: '100px',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
