import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
  },
  flexEnd: {
    display: 'flex',
    alignItems: 'end',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  customChip: {
    padding: '12px !important',
    background: '#E8E9E6 !important',
    '& .MuiChip-label': {
      padding: '0px ',
      fontFamily: 'Inter',
    },
  },
}));
