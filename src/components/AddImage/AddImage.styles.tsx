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
    }
  }
);

export default styles