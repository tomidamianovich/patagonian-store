import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
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
    debugger
    return (
    <Grid container item xs={12} spacing={3}>
      { images.map((image:ImageType) =>
        <Grid item xs={4}>
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