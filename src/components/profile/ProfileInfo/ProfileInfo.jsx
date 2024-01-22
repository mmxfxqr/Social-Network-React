import React from 'react';
import s from './ProfileInfo.module.css'
import headProfile from "../../../images/headProfile.jpg"
const ProfileInfo = (props) => {
    return(
      <div className={s.profileInfo}>
        <div>
          <img src={headProfile}></img>
        </div>
        <div className={s.descriptionBlock}>ava + description</div>
      </div>
    );
  }

export default ProfileInfo;