import expect from 'expect';
import * as memberActions from './memberActions';
import * as types from './actionTypes';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

// Test a sync action
describe('Member Actions', () => {
  describe('createMemberSuccess', () => {
    it('should create a CREATE_MEMBER_SUCCESS action', () => {
      //arrange
      const member = {id: 1, lastName: 'Smith'};
      const expectedAction = {
        type: types.CREATE_MEMBER_SUCCESS,
        member: member
      };

      //act
      const action = memberActions.createMemberSuccess(member);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should create BEGIN_AJAX_CALL and LOAD_MEMBERS_SUCCESS when loading members', (done) => {
    const expectedMembers = [
      {
        id: 1,
        lastName: "Smith",
        firstName: "Bob",
        genderId: "M",
        birthDate: "05/01/1970"
      }
    ];

    fetchMock.getOnce('/rest/members', {
      body: expectedMembers,
      headers: { 'content-type': 'application/json'}
    });

    const expectedActions = [
      {type: types.BEGIN_AJAX_CALL},
      {type: types.LOAD_MEMBERS_SUCCESS, members: expectedMembers}
    ];

    const store = mockStore({members: []}, expectedActions);
    store.dispatch(memberActions.loadMembers()).then(() => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.BEGIN_AJAX_CALL);
      expect(actions[1].type).toEqual(types.LOAD_MEMBERS_SUCCESS);
      expect(actions[1].members).toEqual(expectedMembers);
      done();
    });
  });
});
