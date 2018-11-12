import * as types from './actionTypes';
import genderApi from '../api/genderApi';
import { beginAjaxCall } from './ajaxStatusActions';

export function loadGendersSuccess(genders) {
  return { type: types.LOAD_GENDERS_SUCCESS, genders };
}

export function loadGenders() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return genderApi.getAllGenders().then(genders => {
      dispatch(loadGendersSuccess(genders));
    }).catch(error => {
      throw(error);
    });
  };
}
