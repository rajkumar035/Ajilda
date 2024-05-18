import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  bannerImg: {
    width: '100%',
    height: '200px',
    borderRadius: '12px',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexEnd: {
    display: 'flex',
    alignItems: 'end',
  },
  customChip: {
    background: '#FBEAEA',
    '& .MuiChip-label': {
      padding: '10px',
      fontFamily: 'Inter',
    },
  },
  customChipTag: {
    position: 'absolute',
    right: '10px',
    top: '10px',
    '& .MuiChip-label': {
      padding: '0px 26px',
      fontFamily: 'Inter',
    },
  },
  descriptionStyle: {
    lineHeight: '22px',
    height: '44px',
    color: '#424C23',
  },
}));
