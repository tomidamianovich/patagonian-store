import React from 'react'
import {
	withStyles,
	WithStyles
} from '@material-ui/core/styles';
import styles from './ImageGallery.styles'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ImagesRow from '../../components/ImagesRow/ImagesRow'
import { ImageType } from '../../utils/type'
import { images } from '../../utils/store'

type Props = WithStyles<typeof styles>;

/*
* Component that contains a gallery of images inside a grid, in which each
* image has a clickable option to delete it.
*/

const ImageGallery: React.FC<Props> = ({
	classes
}) => {

	const imagesToChunks = (images:ImageType[], imagesPerRow:number = 3) => {
		// This function will returns an array of the images separated in chunks
		if (imagesPerRow === 0) return [] // Avoiding division by zero
		return images.reduce((resultArray:any[], item:ImageType, index:number) => {
			const chunkIndex = Math.floor(index/imagesPerRow) // items per chunk   
			if(!resultArray[chunkIndex])
				resultArray[chunkIndex] = [] // start a new chunk
			resultArray[chunkIndex].push(item)
			return resultArray
		}, [])
	} 

	return (
		<div className={classes.root}>
			<Button size="small">
				Add Image
			</Button>
      <Grid container spacing={1} className={classes.grid}>
				{ imagesToChunks(images).map((image:ImageType[]) => <ImagesRow images={image} /> )}
      </Grid>
    </div>
	);
}

export default withStyles(styles)(ImageGallery);