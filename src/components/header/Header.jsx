import React from "react";
import s from './Header.module.css';
import logo from '../../images/Logo.png'
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src={logo}></img>
      <div className={s.loginBlock}>
        {props.isAuth? props.login:
        <NavLink to = {'/login'}>Log in</NavLink>}
      </div>
    </header>
  );
};

export default Header;
