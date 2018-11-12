import expect from 'expect';
import {gendersFormattedForDropdown, genderForDisplay} from './selectors';

describe('Gender Selectors', () => {
  const genders = [
    {id: 'F', gender: 'Female'},
    {id: 'M', gender: 'Male'}
  ];

  describe('gendersFormattedForDropdown', () => {
    it('should return gender data formatted for use in a dropdown', () => {
      const expected = [
        {value: 'F', text: 'Female'},
        {value: 'M', text: 'Male'}
      ];

      expect(gendersFormattedForDropdown(genders)).toEqual(expected);
    });
  });

  describe('genderForDisplay', () => {
    it('should return gender description given the id', () => {
      const genderId = 'M';
      expect(genderForDisplay(genders, genderId)).toEqual('Male');
    });
  });
});
