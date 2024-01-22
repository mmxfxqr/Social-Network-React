import React from "react";
import s from './Header.module.css';
import logo from '../../images/Logo.png'

const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo}></img>
    </header>
  );
};

export default Header;
