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
  Link,
  CircularProgress
} from '@material-ui/core';
import { PersonalDataType } from '../../utils/type'
import { db, storage } from '../../config'
import React, { useState, useEffect, useCallback } from 'react';

type Props = {} & WithStyles<typeof styles>;

/*
* Component that shows the user’s personal information, alongside a
* rounded avatar of 150px of diameter with a coloured border.
*/

const PersonalPage: React.FC<Props> = ({
	classes
}) => {
const placeholderPersonalData = { 
  name: '',
  mail: '', 
  tel: '', 
  linkedIn: '', 
  birthday: '', 
  location: '',
  photoUrl: ''
} 

const [personalData, setPersonalData] = useState<PersonalDataType>(placeholderPersonalData)
const [profilePictureUrl, setProfilePictureUrl] = useState()
const [loadingPersonalData, setLoadingPersonalData] = useState<boolean>(true)

const getProfilePicture = useCallback( (url:string) => {
  if (url === '' || profilePictureUrl) return
  const starsRef = storage.refFromURL(url);
  // Get the download URL
  starsRef.getDownloadURL()
    .then((url) => setProfilePictureUrl(url)) // Get the profile photo from firebase storage
    .catch((error) => console.log(error)) // Printing error in the console
    .finally(() => setLoadingPersonalData(false)); // Showing the card
}, [profilePictureUrl])

const fetchPersonalData = useCallback( async() => {
  const nameRef = db.ref().child('personalData')
  setLoadingPersonalData(true)
  nameRef.on('value', snapshot => {
    const { photoUrl } = snapshot.val()
    setPersonalData(snapshot.val())
    photoUrl && getProfilePicture(photoUrl)
  })
}, [getProfilePicture])

useEffect(() => {
  fetchPersonalData();
}, [fetchPersonalData])

// const personalData:PersonalDataType = useSelector((state:CombinedState) => state.PersonalDataReducers)
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

const getLinkedInPath = (profile:string) => `https://www.linkedin.com/in/${profile}/`

const calcAge = (dateString:Date) => {
  const birthday = +new Date(dateString);
  return `${~~((Date.now() - birthday) / (31557600000))} years old`;;
}

return (
  <div className={classes.wrapper} data-testid="personal-page-wrapper">
    { loadingPersonalData && <CircularProgress disableShrink className={classes.spinner} /> }
    { !loadingPersonalData &&
      <Card className={classes.root}>
        <CardActionArea>
          { profilePictureUrl &&
            <CardMedia
              className={classes.media}
              image={profilePictureUrl}
              title="Contemplative Reptile"
            />
          }
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
              <Link href={getLinkedInPath(linkedIn)} target="_blank" >
                {` /${linkedIn}`}
              </Link>
            </Typography>
            <RowData title="Mail" value={mail} />
            <RowData title="Tel" value={tel} />
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" className={classes.contactButton}>
              <Link href={`mailto:${mail}`} target="_blank">
                Contact
              </Link>
          </Button>
        </CardActions>
      </Card>
    }
  </div>
);
}

export default withStyles(styles)(PersonalPage);