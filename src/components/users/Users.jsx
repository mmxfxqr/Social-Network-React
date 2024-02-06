import React from "react";
import s from "./Users.module.css";
const Users = (props) => {
    if(props.users.length === 0){
        props.setUsers([  {
            id: 1,
            followed: true,
            photoUrl:
            "https://e7.pngegg.com/pngimages/162/125/png-clipart-internet-of-things-information-digital-marketing-others-miscellaneous-face.png",
            fullName: "Sasha",
  status: "FIOEDOWEPJ",
  location: { city: "Kursk", country: "Russia" },
},
{
  id: 2,
  followed: false,
  photoUrl:
    "https://e7.pngegg.com/pngimages/162/125/png-clipart-internet-of-things-information-digital-marketing-others-miscellaneous-face.png",
  fullName: "Dmitry",
  status: "gregrewgerw",
  location: { city: "Kiev", country: "Ukraine" },
},
{
  id: 3,
  followed: false,
  photoUrl:
    "https://e7.pngegg.com/pngimages/162/125/png-clipart-internet-of-things-information-digital-marketing-others-miscellaneous-face.png",
  fullName: "Kirill",
  status: "4grq23qqregqer",
  location: { city: "Moscow", country: "Russia" },
},
{
  id: 4,
  followed: true,
  photoUrl:
    "https://e7.pngegg.com/pngimages/162/125/png-clipart-internet-of-things-information-digital-marketing-others-miscellaneous-face.png",
  fullName: "Anton",
  status: "FIOEDOWEPJ",
  location: { city: "Minsk", country: "Belarus" },
},]);
}
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={s.photo} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
