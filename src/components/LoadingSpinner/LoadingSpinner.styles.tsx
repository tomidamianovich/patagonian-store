import {
	createStyles,
	Theme,
} from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    spinner: {
      display: 'block',
      padding: '1rem',
      color: '#f1870d',
      margin: 'auto'
    }
  });

export default styles