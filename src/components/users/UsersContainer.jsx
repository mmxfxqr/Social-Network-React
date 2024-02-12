import React from "react";
import { connect } from "react-redux";
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setUsersActionCreator,
  setUsersTotalCountActionCreator,
  toggleIsFetchingActionCreator,
  unfollowActionCreator,
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

class UsersAPIComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
        />
      </>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      let action = followActionCreator(userID);
      dispatch(action);
    },
    unfollow: (userID) => {
      let action = unfollowActionCreator(userID);
      dispatch(action);
    },
    setUsers: (users) => {
      let action = setUsersActionCreator(users);
      dispatch(action);
    },
    setCurrentPage: (pageNumber) => {
      let action = setCurrentPageActionCreator(pageNumber);
      dispatch(action);
    },
    setTotalUsersCount: (totalCount) => {
      let action = setUsersTotalCountActionCreator(totalCount);
      dispatch(action);
    },
    toggleIsFetching: (isFetching) => {
      let action = toggleIsFetchingActionCreator(isFetching);
      dispatch(action);
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPIComponent);
export default UsersContainer;
