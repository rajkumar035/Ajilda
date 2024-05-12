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
  tabsActive: {
    background: '#8EA64C !important',
    height: '3px !important',
  },
  tabs: {
    textTransform: 'capitalize !important',
    fontSize: '16px !important',
    fontWeight: '500 !important',
    color: '#1C2409 !important',
    fontFamily: 'Inter !important',
  },
  orderCardLayout: {
    width: '100%',
    padding: '30px 0px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    borderBottom: '1px solid #E8E8E8',
  },
  productImage: {
    objectFit: 'cover',
    height: '180px',
    width: '260px',
  },
  actionContainer: {
    gap: '24px',
    alignItems: 'end',
  },
}));
