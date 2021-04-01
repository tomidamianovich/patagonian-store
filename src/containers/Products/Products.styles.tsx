import {
	createStyles,
	Theme,
} from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    table: {
      minWidth: 700,
    },
    wrapper: {
      padding: '2rem 5rem'
    },
    spinner: {
      padding: '1rem',
      color: '#f1870d'
    }
  });

export default styles