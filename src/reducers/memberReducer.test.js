import expect from 'expect';
import memberReducer from './memberReducer';
import * as actions from '../actions/memberActions';

describe('Member Reducer', () => {
  it('should add member when passed CREATE_MEMBER_SUCCESS', () => {
    // arrange
    const initialState = [
      {lastName: 'Doe'},
      {lastName: 'Smith'}
    ];

    const newMember = {lastName: 'Jones'};

    const action = actions.createMemberSuccess(newMember);

    // act
    const newState = memberReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].lastName).toEqual('Doe');
    expect(newState[1].lastName).toEqual('Smith');
    expect(newState[2].lastName).toEqual('Jones');
  });

  it('should update member when passed UPDATE_MEMBER_SUCCESS', () => {
    // arrange
    const initialState = [
      {id: 1, lastName: 'Doe'},
      {id: 2, lastName: 'Smith'},
      {id: 3, lastName: 'Jones'}
    ];

    const member = {id: 2, lastName: 'Smythe'};
    const action = actions.updateMemberSuccess(member);

    // act
    const newState = memberReducer(initialState, action);
    const updatedMember = newState.find(a => a.id == member.id);
    const untouchedMember = newState.find(a => a.id == 1);

    // assert
    expect(updatedMember.lastName).toEqual('Smythe');
    expect(untouchedMember.lastName).toEqual('Doe');
    expect(newState.length).toEqual(3);
  });
});
