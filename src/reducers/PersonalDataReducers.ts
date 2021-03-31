import * as actionTypes from "../actionTypes/PersonalDataTypes"
import { PersonalDataType, PersonalDataAction } from '../utils/type'
import { personalData } from '../utils/store'

const initialState:PersonalDataType = personalData

const reducer = (
  state: PersonalDataType = initialState,
  action: PersonalDataAction
): PersonalDataType => {
  switch (action.type) {
    case actionTypes.EDIT_PERSONAL_DATA:
      const newPersonalData: PersonalDataType = {
        name: action.payload.name,
        location: action.payload.location,
        birthday: action.payload.birthday,
        linkedIn: action.payload.linkedIn,
        mail: action.payload.mail,
        tel: action.payload.tel
      }
      return newPersonalData
  }
  return state
}

export default reducer