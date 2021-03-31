import {
	withStyles,
	WithStyles
} from '@material-ui/core/styles';
import styles from './PersonalPage.styles'

type Props = {} & WithStyles<typeof styles>;

/*
* Component that shows the user’s personal information, alongside a
* rounded avatar of 150px of diameter with a coloured border.
*/

const PersonalPage: React.FC<Props> = ({
	classes
}) => {
	return (
		<div className={classes.wrapper} data-testid="personal-page-wrapper">
			Personal Page
		</div>
	);
}

export default withStyles(styles)(PersonalPage);