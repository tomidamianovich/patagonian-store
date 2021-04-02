import { ADD_IMAGE, SET_IMAGES, REMOVE_IMAGE } from '../actionTypes/ImageTypes'
import { ImageType, ImageAction, ImageActionBatch } from '../utils/type'

export function addImage(payload: ImageType) {
  const action: ImageAction = {
    type: ADD_IMAGE,
    payload
  }
  return action
}

export function setImages(payload: ImageType[]) {
  const action: ImageActionBatch = {
    type: SET_IMAGES,
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

