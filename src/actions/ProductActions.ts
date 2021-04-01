import { SET_PRODUCTS } from '../actionTypes/ProductTypes';
import { ProductType, ProductAction } from '../utils/type'

export function setProducts(payload: ProductType[]) {
  const action: ProductAction = {
    type: SET_PRODUCTS,
    payload
  }
  return action
}
