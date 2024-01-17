import React from "react";
import s from "./Post.module.css";
console.log(s)
const Post = (props) => {
  return (
    <div className={s.item}>
      <div>
        <img src="https://pic.rutubelist.ru/user/5a/2b/5a2b1dde9d06d58cb342039912783d05.jpg"></img>
        {props.message}
      </div>
      <span>
        like: {props.like__count}
      </span>
    </div>
  );
};

export default Post;
