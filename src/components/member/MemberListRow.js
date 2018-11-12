import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { genderForDisplay } from '../../selectors/selectors';

const MemberListRow = ({member, allGenders, onDelete, location}) => {
  let handleDelete = () => {
    onDelete(member);
  };

  return (
    <tr>
      <td><Link to={{ pathname: '/member/' + member.id, search: location.search }}>{member.id}</Link></td>
      <td>{`${member.firstName} ${member.lastName}`}</td>
      <td>{genderForDisplay(allGenders, member.genderId)}</td>
      <td>{member.birthDate}</td>
      <td><span className="remove-x" onClick={handleDelete}>X</span></td>
    </tr>
  );
};

MemberListRow.propTypes = {
  member: PropTypes.object.isRequired,
  allGenders: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(MemberListRow);
