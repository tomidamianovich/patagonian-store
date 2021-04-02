import React, { useState, useEffect, useCallback }  from 'react'
import { withStyles, WithStyles } from '@material-ui/core/styles';
import styles from './ImageGallery.styles'
import { Grid } from '@material-ui/core';
import ImagesRow from '../../components/ImagesRow/ImagesRow'
import { ImageType, CombinedState } from '../../utils/type'
import { useSelector, useDispatch } from 'react-redux'
import { db, storage } from '../../config'
import { setImages } from "../../actions/ImageActions"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
import AddImage from "../../components/AddImage/AddImage"

type Props = WithStyles<typeof styles>;

/*
* Component that contains a gallery of images inside a grid, in which each
* image has a clickable option to delete it.
*/

const ImageGallery: React.FC<Props> = ({
	classes
}) => {
	const [loadingImages, setLoadingImages] = useState<boolean>(false)
	const dispatch = useDispatch()
	const images = useSelector((state:CombinedState) => state.ImageReducers)

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

	const getImagesFromStorage =  useCallback((imagesArray:ImageType[]) => {
    var starsRef:Array<Promise<string>> = []
		const imagesWithStorageUrls = [...imagesArray]
    imagesArray.forEach(image => {
      starsRef = [
        ...starsRef,
        storage.refFromURL(image.url).getDownloadURL()
      ]
    })
    Promise.all(starsRef).then(res => {
			imagesWithStorageUrls.forEach((image, index) => {
				image.url = res[index]
			});
			dispatch(setImages(imagesWithStorageUrls));
			setLoadingImages(false); // Showing the card
    })
  }, [dispatch])

	const fetchImagesData = useCallback(async() => {
		const nameRef= db.ref().child('images')
		nameRef.on('value', snapshot => {
			const images = snapshot.val().filter((img:ImageType) => img)
			getImagesFromStorage(images)
		})
	}, [getImagesFromStorage])

	useEffect(() => {
		// Cheking if the info was not already loaded in the past.
		if (!images.length && !loadingImages ) {
			setLoadingImages(true)
			fetchImagesData()
		}
	}, [fetchImagesData, images, loadingImages])

	const getIndexValue = () => {
		if (!images.length) return 0
		var greatherId = -Infinity
		images.forEach(image => {
      if(image.id > greatherId) {
				greatherId = image.id
			}
   	});
   	return greatherId+1;
	}

	return (
		<div className={classes.root}>
			<AddImage lastIndex={getIndexValue()}/>
			{ !loadingImages && 
				<Grid container spacing={1} className={classes.grid}>
					{ imagesToChunks(images).map((image:ImageType[], index) => 
						<ImagesRow images={image} key={index} />
					)}
				</Grid>
			} 
			<LoadingSpinner isLoading={loadingImages} />
    </div>
	);
}

export default withStyles(styles)(ImageGallery);