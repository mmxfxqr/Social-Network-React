import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";

const MyPostsContainer = (props) => {
  let state = props.store.getState().profilePage;
  let addPost = () => {
    let action = addPostActionCreator();
    props.store.dispatch(action);
  };

  let onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };
  return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts ={state.posts} newPostText={state.newPostText}/>;
};

export default MyPostsContainer;
