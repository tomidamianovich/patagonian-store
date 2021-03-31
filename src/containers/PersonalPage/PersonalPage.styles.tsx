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
      height: 140,
      borderRadius: '86rem',
      maxWidth: '150px',
      border: '.3rem solid #f1870d',
      display: 'block',
      maxHeight: '150px',
      margin: '1rem auto auto auto'
    },
    wrapper: {
    }
  });

export default styles