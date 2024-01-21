import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = (props) => {
  

  let postsElements = props.posts.map((p) => (
    <Post message={p.message} like__count={p.like__count} />
  ));
  return (
    <div className={s.myPostsBlock}>
      My Post:
      <div className={s.writePost}>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
