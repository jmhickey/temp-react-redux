import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const MemberForm = ({member, allGenders, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Member</h1>
      <TextInput
        name="firstName"
        label="First Name"
        value={member.firstName}
        onChange={onChange}
        error={errors.firstName}/>

      <TextInput
        name="lastName"
        label="Last Name"
        value={member.lastName}
        onChange={onChange}
        error={errors.lastName}/>

      <SelectInput
        name="genderId"
        label="Gender"
        value={member.genderId}
        defaultOption="Select Gender"
        options={allGenders}
        onChange={onChange} error={errors.genderId}/>

      <TextInput
        name="birthDate"
        label="Birth Date"
        value={member.birthDate}
        onChange={onChange}
        error={errors.birthDate}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

MemberForm.propTypes = {
  member: PropTypes.object.isRequired,
  allGenders: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default MemberForm;
