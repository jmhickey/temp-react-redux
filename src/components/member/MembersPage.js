import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as memberActions from '../../actions/memberActions';
import MemberList from './MemberList';
import {withRouter} from 'react-router-dom';
import toastr from 'toastr';

class MembersPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddMemberPage = this.redirectToAddMemberPage.bind(this);
    this.deleteMember = this.deleteMember.bind(this);
  }

  redirectToAddMemberPage() {
    this.props.history.push('/member' + this.props.history.location.search);
  }

  deleteMember(member) {
    this.props.actions.deleteMember(member.id)
      .then(() => {
        toastr.success(`Member '${member.firstName} ${member.lastName}' removed`);
      })
      .catch(error => {
        toastr.error(error);
      });
  }

  render() {
    const {members, genders} = this.props;

    return (
      <div>
        <h1>Members</h1>
        <input type="submit"
               value="Add Member"
               className="btn btn-primary"
               onClick={this.redirectToAddMemberPage}/>
        <MemberList members={members} allGenders={genders} onDelete={this.deleteMember}/>
      </div>
    );
  }
}

MembersPage.propTypes = {
  members: PropTypes.array.isRequired,
  genders: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    members: state.members,
    genders: state.genders
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(memberActions, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MembersPage));
