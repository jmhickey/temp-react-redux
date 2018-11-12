import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function memberReducer(state = initialState.members, action) {
  switch(action.type) {
    case types.LOAD_MEMBERS_SUCCESS:
      return action.members;

    case types.CREATE_MEMBER_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.member)
      ];

    case types.UPDATE_MEMBER_SUCCESS:
      return [
        ...state.filter(member => member.id !== action.member.id),
        Object.assign({}, action.member)
      ];

    case types.DELETE_MEMBER_SUCCESS:
    return [
      ...state.filter(member => member.id !== action.memberId)
    ];

    default:
      return state;
  }
}
