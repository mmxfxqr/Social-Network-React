import React from "react";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div>
        <a href="/profile">Profile</a>
      </div>
      <div>
        <a href="/dialogs">Messages</a>
      </div>
      <div>
        <a>News</a>
      </div>
      <div>
        <a>Music</a>
      </div>
      <div>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Nav;
