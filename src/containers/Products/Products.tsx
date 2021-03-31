import {
	withStyles,
	createStyles,
	Theme,
	WithStyles
} from '@material-ui/core/styles';
import styles from './Products.styles'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useSelector } from 'react-redux'
import { ProductType, CombinedState } from '../../utils/type'

type Props = {} & WithStyles<typeof styles>;

/*
* Component that displays the content stores in a
* responsive table, centered both horizontally and vertically
*/

const Products: React.FC<Props> = ({
	classes
}) => {
	const rows:ProductType[] = useSelector((state:CombinedState) => state.ProductReducers)
	
	const StyledTableCell = withStyles((theme: Theme) =>
		createStyles({
			head: {
				backgroundColor: '#f1870d',
				color: theme.palette.common.white,
			},
			body: {
				fontSize: 14,
			},
		}),
	)(TableCell);

	const StyledTableRow = withStyles((theme: Theme) =>
		createStyles({
			root: {
				'&:nth-of-type(odd)': {
					backgroundColor: theme.palette.action.hover,
				},
			},
		}),
	)(TableRow);

	return (
		<div className={classes.wrapper} data-testid="products-wrapper">
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="customized table">
					<TableHead>
						<TableRow>
							<StyledTableCell>Product</StyledTableCell>
							<StyledTableCell align="right">Name</StyledTableCell>
							<StyledTableCell align="right">Date</StyledTableCell>
							<StyledTableCell align="right">Sku</StyledTableCell>
							<StyledTableCell align="right">Weight</StyledTableCell>
							<StyledTableCell align="right">Height</StyledTableCell>
							<StyledTableCell align="right">Width</StyledTableCell>
							<StyledTableCell align="right">Origin</StyledTableCell>
							<StyledTableCell align="right">Minimum</StyledTableCell>
							<StyledTableCell align="right">Delay</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<StyledTableRow key={row.name}>
								<StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
								<StyledTableCell align="right">{row.number}</StyledTableCell>
								<StyledTableCell align="right">{row.date}</StyledTableCell>
								<StyledTableCell align="right">{row.sku}</StyledTableCell>
								<StyledTableCell align="right">{row.weight}</StyledTableCell>
								<StyledTableCell align="right">{row.height}</StyledTableCell>
								<StyledTableCell align="right">{row.width}</StyledTableCell>
								<StyledTableCell align="right">{row.origin}</StyledTableCell>
								<StyledTableCell align="right">{row.minimum}</StyledTableCell>
								<StyledTableCell align="right">{row.delay}</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default withStyles(styles)(Products);