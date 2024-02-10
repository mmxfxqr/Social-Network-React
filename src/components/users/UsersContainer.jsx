import React from 'react'
import { connect } from 'react-redux'
import Users from './Users';
import { followActionCreator, setCurrentPageActionCreator, setUsersActionCreator, setUsersTotalCountActionCreator, unfollowActionCreator } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userID) => {
            let action = followActionCreator(userID);
            dispatch(action)
        },
        unfollow: (userID) => {
            let action = unfollowActionCreator(userID);
            dispatch(action)
        },
        setUsers: (users) => {
            let action = setUsersActionCreator(users);
            dispatch(action)
        },
        setCurrentPage: (pageNumber) => {
            let action = setCurrentPageActionCreator(pageNumber);
            dispatch(action)
        },
        setTotalUsersCount: (totalCount) => {
            let action = setUsersTotalCountActionCreator(totalCount);
            dispatch(action)
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;