import {
	createStyles,
	Theme,
} from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100%',
      margin: '1rem'
    },
    grid: {
      width: '100%'
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
      padding: '8px',
      minHeight: '7rem',
      margin: '1rem',
      boxShadow: '0 0 2px black'
    },
    media: {
      minHeight: '10rem',
      margin: 0,
      padding: 0,
      display: 'block',
      maxHeight: '150px',
      borderRadius: '.4rem',
      objectFit: 'cover',
      width: '100%'
    },
    closeButton:{
      marginRight: '0',
      marginLeft: 'auto',
      display: 'block',
      padding: '0',
      '& span': {
        padding: '0',
        textAlign: 'right'
      }
    }
  });

export default styles