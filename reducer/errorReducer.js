import { actionTypes } from '../constants/actionTypes'

import {exampleInitialState}  from './initialState'

function counterReducer(state = exampleInitialState.error, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return action.error
    default:
      return state
  }
}

export default counterReducer
