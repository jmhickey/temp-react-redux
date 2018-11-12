import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as memberActions from '../../actions/memberActions';
import MemberForm from './MemberForm';
import { gendersFormattedForDropdown } from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageMemberPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      member: Object.assign({}, props.member),
      errors: {},
      saving: false
    };

    this.updateMemberState = this.updateMemberState.bind(this);
    this.saveMember = this.saveMember.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.member.id != nextProps.member.id) {
      //Necessary to populate form when existing member is loaded directly.
      this.setState({member: Object.assign({}, nextProps.member)});
    }
  }

  updateMemberState(event) {
    const field = event.target.name;
    let member = Object.assign({}, this.state.member);
    member[field] = event.target.value;
    return this.setState({member: member});
  }

  memberFormIsValid() {
    let formIsValid = true;
    let errors = {};

    // Simple regex to roughly validate birth date
    // Not 100% correct -- would be replaced with more sophisticated validation in real app.
    let birthDateRe = /^(0[1-9]|1[012])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d$/;

    if (this.state.member.lastName.length < 2) {
      errors.lastName = 'Last Name must be at least 2 characters.';
      formIsValid = false;
    }

    if (!this.state.member.genderId) {
      errors.genderId = 'Gender is required';
      formIsValid = false;
    }

    if (!this.state.member.birthDate) {
      errors.birthDate = 'Birth Date is required (MM/DD/YYYY format)';
      formIsValid = false;
    } else if (!birthDateRe.test(this.state.member.birthDate)) {
      errors.birthDate = 'Birth Date must be a valid date (MM/DD/YYYY format)';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  saveMember(event) {
    event.preventDefault();

    if (!this.memberFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.saveMember(this.state.member)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Member saved');
    this.context.router.history.push('/members' + this.context.router.history.location.search);
  }

  render() {
    return (
        <MemberForm
          member={this.state.member}
          allGenders={this.props.genders}
          onChange={this.updateMemberState}
          onSave={this.saveMember}
          errors={this.state.errors}
          saving={this.state.saving}
        />
    );
  }
}

ManageMemberPage.propTypes = {
  member: PropTypes.object.isRequired,
  genders: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageMemberPage.contextTypes = {
  router: PropTypes.object
};

function getMemberById(members, id) {
  const member = members.filter(member => member.id == id);
  if (member.length > 0) return member[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const memberId = ownProps.match.params.id; //from the path `/member/:id`
  let member = {id: '', lastName: '', firstName: '', genderId: '', birthDate: ''};

  if (memberId && state.members.length > 0) {
    member = getMemberById(state.members, memberId);
  }

  return {
    member: member,
    genders: gendersFormattedForDropdown(state.genders)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(memberActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageMemberPage);
