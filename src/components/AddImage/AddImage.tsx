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

type Props = {
  lastIndex: number
} & WithStyles<typeof styles>;

const Header: React.FC<Props> = ({
	lastIndex,
  classes
}) => {
  const [file, setFile] = useState<any>(null);
  const dispatch = useDispatch()

  function handleChange(e: any) {
    setFile(e.target.files[0]);
  }

  const handleDispatchAddImage = (url:string, title:string) => {
    const imageToAdd = {
      id: lastIndex,
      url, 
      title
   }
    dispatch(addImage([imageToAdd]));
  }

  const handleAddNewImageRefToDb = (url:string, title:string) => {
    const imageToAdd = { 
      id: lastIndex,
      url, 
      title
    }
    const imagesRef = db.ref().child('images')
    imagesRef.child(lastIndex.toString()).set(imageToAdd);
  }

	const	handleUploadImage = (e: any) => {
    e.preventDefault();
    const uploadTask = storage.ref(`/${file.name}`).put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          setFile(null);
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
    </div>
  );
}

export default withStyles(styles)(Header);