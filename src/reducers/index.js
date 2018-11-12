import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import genders from './genderReducer';
import members from './memberReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  genders,
  members,
  ajaxCallsInProgress
});

export default rootReducer;
