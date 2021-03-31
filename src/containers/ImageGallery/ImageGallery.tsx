import {
	withStyles,
	WithStyles
} from '@material-ui/core/styles';
import styles from './ImageGallery.styles'

type Props = {} & WithStyles<typeof styles>;

/*
* Component that contains a gallery of images inside a grid, in which each
* image has a clickable option to delete it.
*/

const PersonalPage: React.FC<Props> = ({
	classes
}) => {
	return (
		<div className={classes.wrapper} data-testid="image-gallery-wrapper">
			Image Gallery
		</div>
	);
}

export default withStyles(styles)(PersonalPage);