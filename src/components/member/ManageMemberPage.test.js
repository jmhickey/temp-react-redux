import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { ManageMemberPage } from './ManageMemberPage';

describe('Manage Member Page', () => {
  it('sets error message when trying to save empty Last Name', () => {
    const props = {
      actions: { saveMember: () => { return Promise.resolve(); }},
      member: {id: '', lastName: '', firstName: '', genderId: '', birthDate: ''},
      genders: [
        {value: 'F', text: 'Female'},
        {value: 'M', text: 'Male'}
      ]
    };

    const wrapper = mount(<ManageMemberPage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.lastName).toBe('Last Name is required');
  });
});
