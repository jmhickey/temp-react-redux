import * as types from './actionTypes';
import memberApi from '../api/memberApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadMembersSuccess(members) {
  return { type: types.LOAD_MEMBERS_SUCCESS, members };
}

export function createMemberSuccess(member) {
  return {type: types.CREATE_MEMBER_SUCCESS, member};
}

export function updateMemberSuccess(member) {
  return {type: types.UPDATE_MEMBER_SUCCESS, member};
}

export function deleteMemberSuccess(memberId) {
  return {type: types.DELETE_MEMBER_SUCCESS, memberId};
}

export function loadMembers() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return memberApi.getAllMembers().then(members => {
      dispatch(loadMembersSuccess(members));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveMember(member) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    return memberApi.saveMember(member).then(savedMember => {
      member.id ? dispatch(updateMemberSuccess(savedMember)) :
        dispatch(createMemberSuccess(savedMember));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}

export function deleteMember(memberId) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return memberApi.deleteMember(memberId).then(() => {
      dispatch(deleteMemberSuccess(memberId));
    }).catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
