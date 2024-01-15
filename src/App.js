import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/navbar/Nav";
import Profile from "./components/profile/Profile";

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="mainPage__inner">
          <Header />
          <Nav />
          <Profile />
        </div>
      </div>
    </div>
  );
};
export default App;
