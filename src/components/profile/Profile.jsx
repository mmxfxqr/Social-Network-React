import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://imgholder.ru/600x200/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson"></img>
      </div>
      <div>ava + description</div>
      <MyPosts/>
    </div>
  );
};

export default Profile;
