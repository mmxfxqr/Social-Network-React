import React from "react";
import s from "./Post.module.css";
import avaMy from "../../../../images/avatars/1.png"
console.log(s)
const Post = (props) => {
  return (
    <div className={s.item}>
      <div className={s.postInfo}>
        <img src={avaMy} alt="User Avatar"></img>
        {props.message}
      </div>
      <span className={s.likeCount}>
        like: {props.like__count}
      </span>
    </div>
  );
};

export default Post;
