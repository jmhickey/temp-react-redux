import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function genderReducer(state = initialState.genders, action) {
  switch(action.type) {
    case types.LOAD_GENDERS_SUCCESS:
      return action.genders;

    default:
      return state;
  }
}
