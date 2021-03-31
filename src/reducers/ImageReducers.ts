import * as actionTypes from "../actionTypes/ImageTypes"
import { ImageType, ImageAction } from '../utils/type'
import { images } from '../utils/store'

const initialState:ImageType[] = images

const reducer = (
  state: ImageType[] = initialState,
  action: ImageAction
): ImageType[] => {
  switch (action.type) {
    case actionTypes.ADD_IMAGE:
      const newImage: ImageType = {
        title: action.payload.title,
        url: action.payload.url
      }
      return {
        ...state,
        ...newImage
      }
    case actionTypes.REMOVE_IMAGE:
      const updatedImages: ImageType[] = state.filter(
        image => image.url !== action.payload.url
      )
      return updatedImages
  }
  return state
}

export default reducer