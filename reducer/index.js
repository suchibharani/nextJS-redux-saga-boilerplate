// Set up your root reducer here...
import { combineReducers } from 'redux';

import count from './counterReducer';
import placeholderData from './userDataReducer';
import error from './errorReducer';



const rootReducer = combineReducers({
    count,
    placeholderData,
    error
})

export default rootReducer
