import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Member Admin</h1>
        <p>Demo app with React, Redux and React Router.</p>
        <Link to={{ pathname: "/about", search: location.search }} className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

HomePage.propTypes = {
  location: PropTypes.object.isRequired
};

export default withRouter(HomePage);
