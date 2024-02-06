import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
  

  let postsElements = props.profilePage.posts.map((p) => (
    <Post message={p.message} like__count={p.like__count} key={p.id}/>
  ));
  let addPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = addPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={s.myPostsBlock}>
      <div className={s.writePost}>
        <textarea
          onChange={onPostChange}
          ref={addPostElement}
          value={props.profilePage.newPostText}
        />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <strong>My Post:</strong>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
