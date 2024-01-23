import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  

  let postsElements = props.posts.map((p) => (
    <Post message={p.message} like__count={p.like__count} />
  ));
  let addPostElement = React.createRef();
  let addPost = () => {
    let text = addPostElement.current.value;
    alert(text);
  }
  return (
    <div className={s.myPostsBlock}>
      <div className={s.writePost}>
        <textarea ref={addPostElement}></textarea>
        <button onClick={addPost}>Add post</button>
      </div>
      My Post:
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
