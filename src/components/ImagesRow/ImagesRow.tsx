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

type Props = {
  images: ImageType[]
} & WithStyles<typeof styles>;

const ImagesRow: React.FC<Props> = ({
  classes,
  images
}) => {
  debugger
  const [errorImageStorageUrl, setErrorImageStorageUrl] = useState('')
  const [loadingErrorImageUrls, setLoadingErrorImageUrl] = useState(false)

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

  return (
    <Grid container item xs={12} spacing={3}>
      { images.map((image: ImageType, index) =>
        <Grid item xs={4} key={index}>
          <Paper className={classes.paper}>
            <Button size="small" className={classes.closeButton}>
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