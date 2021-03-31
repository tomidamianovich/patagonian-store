import {
	createStyles,
	Theme,
} from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    wrapper: {
      display: 'flex',
      flexFlow: 'row wrap',
      backgroundColor: theme.palette.primary.light,
			color: theme.palette.primary.dark,
			fontSize: theme.typography.h6.fontSize,
			padding: '1rem',
      margin: '1rem',
      ['@media (max-width:511px)']: { // eslint-disable-line
        justifyContent: 'center'
      },
      ['@media (min-width:512px)']: { // eslint-disable-line
        justifyContent: 'flex-start'
      }
    },
    menu: {
      padding: '1rem',
      display: 'flex',
      marginBottom: '1.5rem',
      boxShadow: '0 0 6px 1px #a5a5a5',
      '& button': {
        backgroundColor: '#d8d8d8',
        color: '#383838',
      },
      '& #store-name': {
        fontSize: '1.8rem',
        // backgroundColor: '#046cfc',
        display: 'flex',
        marginLeft: 'auto',
        color: '#046cfc',
        marginRight: 0
      }
    },
    link: {
      textDecoration: 'none',
      color: 'black'
    }
  });

export default styles