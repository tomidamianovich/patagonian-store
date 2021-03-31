import {
	withStyles,
	WithStyles
} from '@material-ui/core/styles';
import styles from './Products.styles'

type Props = {} & WithStyles<typeof styles>;

/*
* Component that displays the content stores in a
* responsive table, centered both horizontally and vertically
*/

const Products: React.FC<Props> = ({
	classes
}) => {
	return (
		<div className={classes.wrapper} data-testid="products-wrapper">
			Products
		</div>
	);
}

export default withStyles(styles)(Products);