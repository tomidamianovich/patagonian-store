import * as actionTypes from "../actionTypes/ProductTypes"
import { ProductType, ProductAction } from '../utils/type'
import { products } from '../utils/store'

const initialState:ProductType[] = products

const reducer = (
  state: ProductType[] = initialState,
  action: ProductAction
): ProductType[] => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      const newProduct: ProductType = {
        number: action.payload.number,
        name: action.payload.name,
        date: action.payload.date,
        sku: action.payload.sku,
        weight: action.payload.weight,
        height: action.payload.height,
        width: action.payload.width,
        origin: action.payload.origin,
        minimum: action.payload.minimum,
        delay: action.payload.delay,
      }
      return {
        ...state,
        ...newProduct
      }
    case actionTypes.REMOVE_PRODUCT:
      const updatedProducts: ProductType[] = state.filter(
        product => product.number !== action.payload.number
      )
      return updatedProducts
  }
  return state
}

export default reducer