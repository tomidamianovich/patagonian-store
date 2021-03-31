import { ADD_PRODUCT, REMOVE_PRODUCT } from '../actionTypes/ProductTypes';
import { ProductType, ProductAction } from '../utils/type'

export function addProduct(payload: ProductType) {
  const action: ProductAction = {
    type: ADD_PRODUCT,
    payload
  }
  return action
}

export function removeProduct(payload: ProductType) {
  const action: ProductAction = {
    type: REMOVE_PRODUCT,
    payload
  }
  return action
}

