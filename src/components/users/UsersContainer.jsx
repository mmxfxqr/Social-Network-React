import React from 'react'
import { connect } from 'react-redux'
import Users from './Users';
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/users-reducer';

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer;