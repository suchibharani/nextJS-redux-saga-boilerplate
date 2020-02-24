import { actionTypes } from '../constants/actionTypes'

import {exampleInitialState}  from './initialState'

function userDataReducer(state = exampleInitialState, action) {
    console.warn(action)
  switch (action.type) {

    case actionTypes.LOAD_DATA_SUCCESS:
      return [
        ...state,
        ...action.data,
      ]

    default:
      return state
  }
}

export default userDataReducer
