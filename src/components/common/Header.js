import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({loading, location}) => {
  return (
    <nav>
      <NavLink exact to={{ pathname: "/", search: location.search }} activeClassName="active">Home</NavLink>
      {" | "}
      <NavLink to={{ pathname: "/members", search: location.search }} activeClassName="active">Members</NavLink>
      {" | "}
      <NavLink to={{ pathname: "/about", search: location.search }} activeClassName="active">About</NavLink>
      {loading && <LoadingDots interval={100} dots={20} />}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(Header);
