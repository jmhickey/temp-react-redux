import { combineReducers } from 'redux';
import genders from './genderReducer';
import members from './memberReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  genders,
  members,
  ajaxCallsInProgress
});

export default rootReducer;
