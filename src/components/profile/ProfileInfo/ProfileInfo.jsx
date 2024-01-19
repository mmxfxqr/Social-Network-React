import React from 'react';
import s from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
    return(
      <div className={s.profileInfo}>
        <div>
          <img src="https://imgholder.ru/600x200/8493a8/adb9ca&text=IMAGE+HOLDER&font=kelson"></img>
        </div>
        <div className={s.descriptionBlock}>ava + description</div>
      </div>
    );
  }

export default ProfileInfo;