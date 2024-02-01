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
                    store={props.store}
                  />
                }
              />
              <Route
                path="/dialogs/*"
                element={
                  <DialogsContainer
                  store = {props.store}
                  />
                }
              />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
