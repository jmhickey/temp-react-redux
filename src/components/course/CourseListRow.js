import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const CourseListRow = ({course, onDelete}) => {
  let handleDelete = () => {
    onDelete(course.id);
  };

  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
      <td><span className="remove-x" onClick={handleDelete}>X</span></td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default CourseListRow;
