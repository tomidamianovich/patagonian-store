import { ADD_IMAGE, SET_IMAGES, REMOVE_IMAGE } from '../actionTypes/ImageTypes'
import { ImageType, ImageActionBatch } from '../utils/type'

export function addImage(payload: ImageType[]) {
  const action: ImageActionBatch = {
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

export function removeImage(payload: ImageType[]) {
  const action: ImageActionBatch = {
    type: REMOVE_IMAGE,
    payload
  }
  return action
}

