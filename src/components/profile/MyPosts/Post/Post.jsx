import React from "react";
import s from "./Post.module.css";
console.log(s)
const Post = () => {
  return (
    <div className={s.item}>
      <div>
        <img src="https://yt3.ggpht.com/a/AGF-l79adPyemyX82Oseyie3lHmbTxVXRL0czDVZQw=s900-c-k-c0xffffffff-no-rj-mo"></img>
        Post 1
      </div>
    </div>
  );
};

export default Post;
