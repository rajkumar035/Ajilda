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
    gap: '12px',
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
  selectStyles: {
    '& .MuiSelect-root': {
      fontSize: '14px',
      fontWeight: '400',
      color: '#49503A',
      paddingBottom: '16px',
      borderRadius: '8px',
    },
  },
  inputStyles: {
    '& .MuiTextField-root': {
      fontSize: '14px',
      fontWeight: '400',
      color: '#49503A',
      paddingBottom: '16px',
      borderRadius: '8px',
    },
  },
  inputLabel: {
    fontSize: '14px !important',
    fontWeight: '400 !important',
    color: '#49503A !important',
  },
  uploadContainer: {
    border: '2px solid #56642E',
    borderStyle: 'dashed',
    padding: '12px',
    display: 'flex',
    borderRadius: '12px',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    cursor: 'pointer',
  },
}));
