import React from 'react'
import {
	withStyles,
	WithStyles
} from '@material-ui/core/styles';
import styles from './ImageGallery.styles'
import { Grid, Button } from '@material-ui/core';
import ImagesRow from '../../components/ImagesRow/ImagesRow'
import { ImageType, CombinedState } from '../../utils/type'
import { useSelector } from 'react-redux'

type Props = WithStyles<typeof styles>;

/*
* Component that contains a gallery of images inside a grid, in which each
* image has a clickable option to delete it.
*/

const ImageGallery: React.FC<Props> = ({
	classes
}) => {
	const images:ImageType[] = useSelector((state:CombinedState) => state.ImageReducers)

	const imagesToChunks = (images:ImageType[], imagesPerRow:number = 3) => {
		// This function will returns an array of the images separated in chunks
		if (imagesPerRow === 0 || !images.length) return [] // Avoiding division by zero
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
				{ imagesToChunks(images).map((image:ImageType[], index) => 
					<ImagesRow images={image} key={index} />
				)}
      </Grid>
    </div>
	);
}

export default withStyles(styles)(ImageGallery);