import expect from 'expect';
import genderReducer from './genderReducer';
import * as actions from '../actions/genderActions';

describe('Gender Reducer', () => {
  it('should return all genders when passed LOAD_GENDERS_SUCCESS', () => {
    // arrange
    const initialState = [];

    const allGenders = [
      {id: 'F', gender: 'Female'},
      {id: 'M', gender: 'Male'}
    ];

    const action = actions.loadGendersSuccess(allGenders);

    // act
    const newState = genderReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(2);
    expect(newState[0].gender).toEqual('Female');
    expect(newState[1].gender).toEqual('Male');
  });
});
