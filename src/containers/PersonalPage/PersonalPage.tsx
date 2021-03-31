import {
	withStyles,
	WithStyles
} from '@material-ui/core/styles';
import styles from './PersonalPage.styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

type Props = {} & WithStyles<typeof styles>;

/*
* Component that shows the user’s personal information, alongside a
* rounded avatar of 150px of diameter with a coloured border.
*/

const PersonalPage: React.FC<Props> = ({
	classes
}) => {

const RowData = (props:any)  => {
  return (
    <div style={{display: 'block'}}>
      <Typography variant="body1" color="textPrimary" component="p" display="inline" align="left">
        {props.title}:
      </Typography>
      <Typography variant="body2" color="textPrimary" component="p" display="inline" align="right">
        {` ${props.value}`}
      </Typography>
    </div>
  )
}

return (
		<div className={classes.wrapper} data-testid="personal-page-wrapper">
			<Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://lh3.googleusercontent.com/a-/AOh14GjgCvchb4v_1xvmtAetJBvjfAFF5kVx9jrmjAtF1A=s96-c-rg-br100"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" >
              Tomas Damianovich
            </Typography>
            <RowData title="Location" value="La Plata, Buenos Aires, Arg." />
            <RowData title="Age" value="26 years old" />
            <RowData title="LinkedIn Profile" value="/tomasdr" />
            <RowData title="Mail" value="tomasdamianovich@gmail.com" />
            <RowData title="Tel" value="2216261952" />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Contact
          </Button>
        </CardActions>
      </Card>
		</div>
	);
}

export default withStyles(styles)(PersonalPage);