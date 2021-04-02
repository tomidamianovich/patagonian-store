import * as actionTypes from "../actionTypes/ImageTypes"
import { ImageType, ImageActionBatch } from '../utils/type'

const initialState:ImageType[] = []

const reducer = (
  state: ImageType[] = initialState,
  action: ImageActionBatch
): ImageType[] => {
  switch (action.type) {
    case actionTypes.SET_IMAGES: 
      debugger
      const images:ImageType[] = action.payload
      return images
    // case actionTypes.ADD_IMAGE:
    //   const newImage: ImageType = {
    //     title: action.payload.title,
    //     url: action.payload.url
    //   }
    //   return {
    //     ...state,
    //     ...newImage
    //   }
    // case actionTypes.REMOVE_IMAGE:
    //   const updatedImages: ImageType[] = state.filter(
    //     image => image.url !== action.payload.url
    //   )
    //   return updatedImages
  }
  return state
}

export default reducer