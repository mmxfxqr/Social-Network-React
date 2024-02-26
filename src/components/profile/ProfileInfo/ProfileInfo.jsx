import React from 'react';
import s from './ProfileInfo.module.css'
import headProfile from "../../../images/headProfile.jpg"
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from './ProfileStatus';
const ProfileInfo = (props) => {
  if(!props.profile){
     return <Preloader/>
  }
  
    return(
      <div className={s.profileInfo}>
        <div>
          <img src={headProfile} className={s.headerImage}></img>
        </div>
        <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large} className={s.avatarImage}/>
          <ProfileStatus status={"Hello"}/>
        </div>
      </div>
    );
  }

export default ProfileInfo;