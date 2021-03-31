import { EDIT_PERSONAL_DATA } from '../actionTypes/PersonalDataTypes';
import { PersonalDataType, PersonalDataAction } from '../utils/type'

export function editPersonalData(payload: PersonalDataType) {
  const action: PersonalDataAction = {
    type: EDIT_PERSONAL_DATA,
    payload
  }
  return action
}

