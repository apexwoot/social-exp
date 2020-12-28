import { connect } from 'react-redux';
import {
  FollowAC,
  LoadAllUsersAC,
  SetCurrentPageAC,
  SetPageSizeAC,
  SetTotalUserCountAC,
  ToggleIsFetchingAC,
  UnfollowAC,
} from '../../../redux/usersReducer';
import React from 'react';
import * as axios from 'axios';
import Users from './Users';

class UsersAPIConponent extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((responce) => {
        this.props.setIsFetching(false);
        this.props.loadAllUsers(responce.data.items);
        this.props.setTotalUserCount(responce.data.totalCount - 8000);
      });
  }

  onPageChanged = (p) => {
    this.props.setIsFetching(true);
    this.props.setCurrentPage(p);

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
      .then((responce) => {
        this.props.setIsFetching(false);
        this.props.loadAllUsers(responce.data.items);
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
        follow={this.props.follow}
        unfollow={this.props.unFollow}
        isFetching={this.props.isFetching}
        setIsFetching={this.props.setIsFetching}
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

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (id) => dispatch(FollowAC(id)),
    unFollow: (id) => dispatch(UnfollowAC(id)),
    loadAllUsers: (users) => dispatch(LoadAllUsersAC(users)),
    setTotalUserCount: (number) => dispatch(SetTotalUserCountAC(number)),
    setPageSize: (number) => dispatch(SetPageSizeAC(number)),
    setCurrentPage: (number) => dispatch(SetCurrentPageAC(number)),
    setIsFetching: (value) => dispatch(ToggleIsFetchingAC(value)),
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIConponent);

export default UsersContainer;
