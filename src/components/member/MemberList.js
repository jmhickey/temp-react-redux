import React from 'react';
import PropTypes from 'prop-types';
import MemberListRow from './MemberListRow';

const MemberList = ({members, allGenders, onDelete}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Birth Date</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {members.map(member =>
          <MemberListRow key={member.id} member={member} allGenders={allGenders} onDelete={onDelete}/>
        )}
      </tbody>
    </table>
  );
};

MemberList.propTypes = {
  members: PropTypes.array.isRequired,
  allGenders: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default MemberList;
