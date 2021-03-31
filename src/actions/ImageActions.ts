import { ADD_IMAGE, REMOVE_IMAGE } from '../actionTypes/ImageTypes'
import { ImageType, ImageAction } from '../utils/type'

export function addImage(payload: ImageType) {
  const action: ImageAction = {
    type: ADD_IMAGE,
    payload
  }
  return action
}

export function removeImage(payload: ImageType) {
  const action: ImageAction = {
    type: REMOVE_IMAGE,
    payload
  }
  return action
}

