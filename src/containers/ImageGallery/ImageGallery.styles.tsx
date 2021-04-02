import {
	createStyles,
	Theme,
} from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    addImageForm: {
      backgroundColor: '#f7f7f7',
      padding: '1rem',
      textAlign: 'center',
      margin: '2rem auto',
      width: '50%',
      borderRadius: '1rem',
      boxShadow: '0 0 6px 1px #a5a5a5'
    },
    root: {
      flexGrow: 1,
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
    alert: {
      margin: '0 10rem',
      padding: '2rem',
      boxShadow: '0 0 3px 0px rgb(13 60 97)'
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