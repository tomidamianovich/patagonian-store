import React, { useState, useEffect, useCallback }  from 'react'
import { withStyles, WithStyles } from '@material-ui/core/styles';
import styles from './ImageGallery.styles'
import { Grid } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
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
	const [alreadyRequestedImages, setAlreadyRequestedImages] = useState<boolean>(false)
	const dispatch = useDispatch()
	const images = useSelector((state:CombinedState) => state.ImageReducers)

	/*
	 This function will returns an array of the images separated in chunks of three images,
		the chunks are used in the grid that shows the images
	*/
	const imagesToChunks = (images:ImageType[], imagesPerRow:number = 3) => {
		if (imagesPerRow === 0 || !images.length) return [] // Avoiding division by zero
		return images.reduce((resultArray:any[], item:ImageType, index:number) => {
			const chunkIndex = Math.floor(index/imagesPerRow) // items per chunk   
			if(!resultArray[chunkIndex])
				resultArray[chunkIndex] = [] // start a new chunk
			resultArray[chunkIndex].push(item)
			return resultArray
		}, [])
	} 

	/*
	 This function will request the image url of the storage, we have in the realtime
	 database the reference url so with that one we need to request the storage url.
	*/
	const getImagesFromStorage =  useCallback((imagesObject:ImageType[]) => {
    let starsRef:Array<Promise<string>> = []
		if (!imagesObject) {
			dispatch(setImages([]));
			setAlreadyRequestedImages(true);
			setLoadingImages(false); // Showing the card
			return
		}
		const imagesArray = Object.values(imagesObject)
		const imagesWithStorageUrls = Object.values(imagesArray)
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
			setAlreadyRequestedImages(true);
			dispatch(setImages(imagesWithStorageUrls));
			setLoadingImages(false); // Showing the card
    })
  }, [dispatch])

	/*	This function request array images data [(id, title, urls),...] */
	const fetchImagesData = useCallback(async() => {
		const nameRef= db.ref().child('images')
		nameRef.on('value', snapshot => {
			const images = snapshot.val()
			getImagesFromStorage(images)
		})
	}, [getImagesFromStorage])
	
	useEffect(() => {
		// Cheking if the info was not already loaded in the past.
		if (!alreadyRequestedImages && !loadingImages ) {
			setLoadingImages(true)
			fetchImagesData()
		}
	}, [fetchImagesData, alreadyRequestedImages, loadingImages])
	
	/*	
		This function will check the latest index in the database in order that when
		the child component add a new image it uses the following one
	*/
	const getIndexValue = () => {
		if (!images.length) return 0
		let greatherId = -Infinity
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
			{ !loadingImages && !images.length &&
				<Alert severity="info" className={classes.alert}>
					<AlertTitle>The Image Gallery is currently empty</AlertTitle>
					Add the first image with the <strong>Add Image Form</strong> above!
				</Alert>
			}
			<Grid container spacing={1} className={classes.grid}>
				{ imagesToChunks(images).map((image:ImageType[], index) => 
					<ImagesRow images={image} key={index} />
				)}
			</Grid>
			<LoadingSpinner isLoading={loadingImages} />
    </div>
	);
}

export default withStyles(styles)(ImageGallery);