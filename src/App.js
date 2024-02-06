import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/navbar/Nav";
import Profile from "./components/profile/Profile";
import { Routes, Route } from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";

const App = (props) => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="app__inner">
          <Header />
          <Nav />
          <div className="app__inner-content">
            <Routes>
              <Route
                path="/profile"
                element={
                  <Profile
                    
                  />
                }
              />
              <Route
                path="/dialogs/*"
                element={
                  <DialogsContainer
                  
                  />
                }
              />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/users" element={<UsersContainer />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
