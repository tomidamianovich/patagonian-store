import { combineReducers } from 'redux'
import ImageReducers from './ImageReducers'
import ProductReducers from './ProductReducers'
import PersonalDataReducers from './PersonalDataReducers'

export default combineReducers({
  ImageReducers,
  ProductReducers,
  PersonalDataReducers
})