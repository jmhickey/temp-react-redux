import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as memberActions from '../actions/memberActions';

describe('Store', () => {
  it('should handle creating members', () => {
    // arrange
    const store = createStore(rootReducer, initialState);
    const member = {
      lastName: "Smith"
    };

    // act
    const action = memberActions.createMemberSuccess(member);
    store.dispatch(action);

    // assert
    const actual = store.getState().members[0];
    const expected = {
      lastName: "Smith"
    };

    expect(actual).toEqual(expected);
  });
});
