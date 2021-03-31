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
    }
  });

export default styles