import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { setUserProfile } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios
      .get('https://social-network.samuraijs.com/api/1.0/profile/2')
      .then((response) => this.props.setUserProfile(response.data));
  }

  render() {
      return <Profile />;
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.posts.currentUserShowing,
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
