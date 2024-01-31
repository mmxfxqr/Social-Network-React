import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";

const MyPosts = (props) => {
  

  let postsElements = props.posts.map((p) => (
    <Post message={p.message} like__count={p.like__count} />
  ));
  let addPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = addPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };
  return (
    <div className={s.myPostsBlock}>
      <div className={s.writePost}>
        <textarea
          onChange={onPostChange}
          ref={addPostElement}
          value={props.newPostText}
        />
        <button onClick={addPost}>Add post</button>
      </div>
      <strong>My Post:</strong>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
