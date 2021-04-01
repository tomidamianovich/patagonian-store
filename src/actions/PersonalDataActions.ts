import { SET_PERSONAL_DATA } from '../actionTypes/PersonalDataTypes';
import { PersonalDataType, PersonalDataAction } from '../utils/type'

export function setPersonalData(payload: PersonalDataType) {
  const action: PersonalDataAction = {
    type: SET_PERSONAL_DATA,
    payload
  }
  return action
}

