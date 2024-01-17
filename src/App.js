import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/navbar/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="app__inner">
          <Header />
          <Nav />
          <div className="app__inner-content">
          {/* <Profile /> */}
          <Dialogs />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
