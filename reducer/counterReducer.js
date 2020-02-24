import { actionTypes } from '../constants/actionTypes'

import {exampleInitialState}  from './initialState'

function counterReducer(state = exampleInitialState.count, action) {
  switch (action.type) {
    // case actionTypes.FAILURE:
    //   return {
    //     ...state,
    //     ...{ error: action.error },
    //   }

    case actionTypes.INCREMENT:
      return state + 1

    case actionTypes.DECREMENT:
      return state - 1

    case actionTypes.RESET:
      return exampleInitialState.count

    // case actionTypes.LOAD_DATA_SUCCESS:
    //   return {
    //     ...state,
    //     ...{ placeholderData: action.data },
    //   }

    // case actionTypes.TICK_CLOCK:
    //   return {
    //     ...state,
    //     ...{ lastUpdate: action.ts, light: !!action.light },
    //   }

    default:
      return state
  }
}

export default counterReducer
