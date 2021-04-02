import React, { useState } from "react";
import { Button, FormControl, InputLabel, FormHelperText, Input } from '@material-ui/core';
import styles from './AddImage.styles';
import {
  withStyles,
  WithStyles
} from '@material-ui/core/styles';
import { ADD_IMAGE, ADD_IMAGE_HELPER } from "../../utils/constants"
import { storage, db } from '../../config'
import { addImage } from "../../actions/ImageActions"
import { useDispatch } from 'react-redux'
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"

type Props = {
  lastIndex: number
} & WithStyles<typeof styles>;

/* 
  Component that shows the header of the application, a menu to go to the differents
  sections and also the logo of the application at the top right.
*/

const Header: React.FC<Props> = ({
	lastIndex,
  classes
}) => {
  const [file, setFile] = useState<any>(null);
  const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);
  const dispatch = useDispatch()

  // Function that updates the currently selected file once the user pick one.
  function handleChange(e: any) {
    setFile(e.target.files[0]);
  }

  // Handler to dispatch an image upload in order to add it to the state.
  const handleDispatchAddImage = (url:string, title:string) => {
    const imageToAdd = {
      id: lastIndex,
      url, 
      title
   }
    dispatch(addImage([imageToAdd]));
  }

  // Function that uploads the new images reference into the firebase realtime db
  const handleAddNewImageRefToDb = (url:string, title:string) => {
    const imageToAdd = { 
      id: lastIndex,
      url, 
      title
    }
    const imagesRef = db.ref().child('images')
    imagesRef.child(lastIndex.toString()).set(imageToAdd);
  }

  // Function that handles the upload of a new image to the firebase storage.
	const	handleUploadImage = (e: any) => {
    e.preventDefault();
    setIsUploadingImage(true)
    const uploadTask = storage.ref(`/${file.name}`).put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
      .ref("")
      .child(file.name)
      .getDownloadURL()
      .then((url) => {
          setFile(null);
          setIsUploadingImage(false)
          handleDispatchAddImage(url, file.name)
          handleAddNewImageRefToDb(url, file.name)
        });
    });
	}

  return (
    <div className={classes.addImageForm}>
      <form onSubmit={handleUploadImage}>
        <FormControl>
          <InputLabel htmlFor="my-input">{ADD_IMAGE}</InputLabel>
          <Input type="file" id="add-image-input" onChange={handleChange}/>
          <FormHelperText>{ADD_IMAGE_HELPER}</FormHelperText>
        </FormControl>
        <Button size="small" type="submit" fullWidth disabled={!file}>
          {ADD_IMAGE}
        </Button>
      </form>
      <LoadingSpinner isLoading={isUploadingImage} />
    </div>
  );
}

export default withStyles(styles)(Header);