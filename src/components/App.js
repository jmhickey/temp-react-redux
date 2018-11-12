// This component handles the App template used on every page.
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './common/Header';
import HomePage from './home/HomePage';
import AboutPage from './about/AboutPage';
import MembersPage from './member/MembersPage';
import ManageMemberPage from './member/ManageMemberPage';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header
          loading={this.props.loading}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/members" component={MembersPage} />
          <Route path="/member/:id" component={ManageMemberPage} />
          <Route path="/member" component={ManageMemberPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default withRouter(connect(mapStateToProps)(App));
