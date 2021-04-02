import * as actionTypes from "../actionTypes/ProductTypes"
import { ProductType, ProductAction } from '../utils/type'

const initialState:ProductType[] = []

const reducer = (
  state: ProductType[] = initialState,
  action: ProductAction
): ProductType[] => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      const products: ProductType[] = action.payload
      return products
  }
  return state
}

export default reducer