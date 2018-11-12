import expect from 'expect';
import React from 'react';
import {shallow} from 'enzyme';
import MemberForm from './MemberForm';

function setup(saving) {
  const props = {
    member: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<MemberForm {...props} />);
}

describe('MemberForm via Enzyme', () => {
  it('renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Member');
  });

  it('has a First Name text input', () => {
    const wrapper = setup(false);
    expect(wrapper.find('TextInput').first().props().label).toEqual("First Name");
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('save button is labeled "Saving..." when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});
