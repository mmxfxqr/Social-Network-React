import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/navbar/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="container">
          <div className="app__inner">
            <Header />
            <Nav />
            <div className="app__inner-content">
              <Routes>
                <Route path="/profile" element={<Profile state={props.state.profilePage}/>} />
                <Route path="/dialogs/*" element={<Dialogs state={props.state.messagesPage}/>} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings/>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};
export default App;
