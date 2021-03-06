import * as actionTypes from "../actionTypes/PersonalDataTypes"
import { PersonalDataType, PersonalDataAction } from '../utils/type'

export const placeholderPersonalData:PersonalDataType = { 
  name: '',
  mail: '', 
  tel: '', 
  linkedIn: '', 
  birthday: '', 
  location: '',
  photoUrl: ''
} 

const initialState:PersonalDataType = placeholderPersonalData

const reducer = (
  state: PersonalDataType = initialState,
  action: PersonalDataAction
): PersonalDataType => {
  switch (action.type) {
    case actionTypes.SET_PERSONAL_DATA:
      const newPersonalData: PersonalDataType = {
        name: action.payload.name,
        location: action.payload.location,
        birthday: action.payload.birthday,
        linkedIn: action.payload.linkedIn,
        mail: action.payload.mail,
        tel: action.payload.tel,
        photoUrl: action.payload.photoUrl
      }
      return newPersonalData
  }
  return state
}

export default reducer