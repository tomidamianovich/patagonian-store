import React from 'react'
import { Paper, Grid, Button, CardMedia } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import styles from './ImagesRow.styles'
import {
  withStyles,
  WithStyles
} from '@material-ui/core/styles';
import { ImageType } from '../../utils/type'

type Props = {
  images: ImageType[]
} & WithStyles<typeof styles>;

const ImagesRow: React.FC<Props> = ({
	classes,
  images
}) => {
    return (
    <Grid container item xs={12} spacing={3}>
      { images.map((image:ImageType, index) =>
        <Grid item xs={4} key={index}>
          <Paper className={classes.paper}>
            <Button size="small" className={classes.closeButton}>
              <CloseIcon />
            </Button>
            <CardMedia
              className={classes.media}
              image={image.url}
              title="Contemplative Reptile"
            />
          </Paper>
        </Grid>
      )}
    </Grid>
  );
}

export default withStyles(styles)(ImagesRow);