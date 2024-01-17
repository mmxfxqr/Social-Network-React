import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
const MyPosts = () => {
  return (
      <div>
        My Post:
        <div>
          <textarea></textarea>
          <button>Add post</button>
        </div>
        <div className={s.posts}>
          <Post message='Hi, how are u' like__count='15'/>
          <Post message="It's my first post" like__count='25'/>
          
        </div>
      </div>  
  );
};

export default MyPosts;
