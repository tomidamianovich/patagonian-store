import {
	withStyles,
	WithStyles
} from '@material-ui/core/styles';
import styles from './PersonalPage.styles'
import { 
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
  Link
} from '@material-ui/core';
import { PersonalDataType, CombinedState } from '../../utils/type'
import { useSelector } from 'react-redux'

type Props = {} & WithStyles<typeof styles>;

/*
* Component that shows the user’s personal information, alongside a
* rounded avatar of 150px of diameter with a coloured border.
*/

const PersonalPage: React.FC<Props> = ({
	classes
}) => {
const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

const personalData:PersonalDataType = useSelector((state:CombinedState) => state.PersonalDataReducers)

const  { name, mail, tel, linkedIn, birthday, location } = personalData

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

const getLinkedInPath = (profile:string) => {
  return `https://www.linkedin.com/in/${profile}/`
}

const calcAge = (dateString:Date) => {
  var birthday = +new Date(dateString);
  return `${~~((Date.now() - birthday) / (31557600000))} years old`;;
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
              {name}
            </Typography>
            <RowData title="Location" value={location} />
            <RowData title="Age" value={calcAge(birthday)} />
            <Typography variant="body1" color="textPrimary" component="p" display="inline" align="left">
              LinkedIn Profile:
            </Typography>
            <Typography variant="body2" color="textPrimary" component="p" display="inline" align="left">
              <Link href={getLinkedInPath(linkedIn)} onClick={preventDefault}>
                {` /${linkedIn}`}
              </Link>
            </Typography>
            <RowData title="Mail" value={mail} />
            <RowData title="Tel" value={tel} />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
              <Link href={`mailto:${mail}`} onClick={preventDefault}>
                Contact
              </Link>
          </Button>
        </CardActions>
      </Card>
		</div>
	);
}

export default withStyles(styles)(PersonalPage);