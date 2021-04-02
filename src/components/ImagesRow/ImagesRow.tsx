import React, { useState, useEffect, useCallback } from 'react'
import { Paper, Grid, Button, CardMedia } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import styles from './ImagesRow.styles'
import {
  withStyles,
  WithStyles
} from '@material-ui/core/styles';
import { ImageType } from '../../utils/type'
import { storage } from '../../config'
import { ERROR_IMAGE_URL } from '../../utils/constants'
import { useDispatch } from 'react-redux'
import { removeImage } from "../../actions/ImageActions"
import { db } from '../../config'

type Props = {
  images: ImageType[]
} & WithStyles<typeof styles>;

/*
  Component that shows images rows, part of the imagegallery grid
*/

const ImagesRow: React.FC<Props> = ({
  classes,
  images
}) => {
  const dispatch = useDispatch()
  const [errorImageStorageUrl, setErrorImageStorageUrl] = useState('')
  const [loadingErrorImageUrls, setLoadingErrorImageUrl] = useState(false)

  // Function that request storage url of an image
  const getErrorImageFromStorage = useCallback( async (url: string) => {
    const starsRef = storage.refFromURL(url);
    // Get the download URL
    const urlFromStorage = await starsRef.getDownloadURL()
    return urlFromStorage
  }, [])

  useEffect(() => {
    if (!errorImageStorageUrl.length && !loadingErrorImageUrls) {
      setLoadingErrorImageUrl(true)
      getErrorImageFromStorage(ERROR_IMAGE_URL).then((data) => {
        setErrorImageStorageUrl(data)
        setLoadingErrorImageUrl(false)
      })
    }
  }, [
    errorImageStorageUrl,
    loadingErrorImageUrls,
    setErrorImageStorageUrl,
    getErrorImageFromStorage
  ])

  // Function that handles the remove of a image reference.
  const handleRemoveImage = (e:any, image:ImageType) => {
    e.preventDefault()
    dispatch(removeImage([image]))
    const imagesRef = db.ref().child('images')
    imagesRef.child(image.id.toString()).remove()
  }
 
  return (
    <Grid container item xs={12} spacing={3}>
      { images.map((image: ImageType, index) =>
        <Grid item xs={4} key={index}>
          <Paper className={classes.paper}>
            <Button size="small" className={classes.closeButton} onClick={(e) => handleRemoveImage(e, image)}>
              <CloseIcon />
            </Button>
            <CardMedia
              className={classes.media}
              image={image.url}
              title={image.title}
            />
          </Paper>
        </Grid>
      )}
    </Grid>
  );
}

export default withStyles(styles)(ImagesRow);