import {
	createStyles,
	Theme,
} from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
      display: 'block',
      margin: 'auto'
    },
    media: {
      borderRadius: '86rem',
      width: 150,
      height: 150,
      border: '.3rem solid #f1870d',
      display: 'block',
      margin: '1rem auto auto auto'
    },
    wrapper: {
    },
    spinner: {
      padding: '1rem',
      color: '#f1870d'
    },
    contactButton: {
      display: 'flex',
      alignItems: 'right'
    }
  });

export default styles