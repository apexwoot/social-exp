import { connect } from 'react-redux';
import {
  Follow,
  LoadAllUsers,
  SetCurrentPage,
  SetPageSize,
  SetTotalUserCount,
  ToggleIsFetching,
  Unfollow,
} from '../../../redux/usersReducer';
import React from 'react';
import * as axios from 'axios';
import Users from './Users';

class UsersAPIConponent extends React.Component {
  componentDidMount() {
    this.props.ToggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((responce) => {
        this.props.ToggleIsFetching(false);
        this.props.LoadAllUsers(responce.data.items);
        this.props.SetTotalUserCount(responce.data.totalCount - 8000);
      });
  }

  onPageChanged = (p) => {
    this.props.ToggleIsFetching(true);
    this.props.SetCurrentPage(p);

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
      .then((responce) => {
        this.props.ToggleIsFetching(false);
        this.props.LoadAllUsers(responce.data.items);
      });
  };

  render() {
    return (
      <Users
        totalUserCount={this.props.totalUserCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.Follow}
        unfollow={this.props.Unfollow}
        isFetching={this.props.isFetching}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.usersData,
    pageSize: state.users.pageSize,
    totalUserCount: state.users.totalUserCount,
    currentPage: state.users.currentPage,
    isFetching: state.users.isFetching,
  };
};

const UsersContainer = connect(mapStateToProps, {
  Follow,
  Unfollow,
  LoadAllUsers,
  SetTotalUserCount,
  SetPageSize,
  SetCurrentPage,
  ToggleIsFetching,
})(UsersAPIConponent);

export default UsersContainer;
