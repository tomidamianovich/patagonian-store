import * as actionTypes from "../actionTypes/ImageTypes"
import { ImageType, ImageActionBatch } from '../utils/type'

const initialState:ImageType[] = []

const reducer = (
  state: ImageType[] = initialState,
  action: ImageActionBatch
): ImageType[] => {
  switch (action.type) {
    case actionTypes.SET_IMAGES:
      const images:ImageType[] = action.payload
      return images
    case actionTypes.ADD_IMAGE:
      return { 
        ...state,
        ...action.payload
      }
    case actionTypes.REMOVE_IMAGE:
      const updatedImages: ImageType[] = state.filter(
        image => image.url !== action.payload[0].url
      )
      return updatedImages
  }
  return state
}

export default reducer