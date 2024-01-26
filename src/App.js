import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Nav from "./components/navbar/Nav";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import { Routes, Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";


const App = (props) => {
  return (
      <div className="wrapper">
        <div className="container">
          <div className="app__inner">
            <Header />
            <Nav />
            <div className="app__inner-content">
              <Routes>
                <Route path="/profile" element={<Profile profilePage={props.state.profilePage} store ={props.store}/>} />
                <Route path="/dialogs/*" element={<Dialogs messagePage={props.state.messagesPage} store ={props.store}/>} />
                <Route path="/news" element={<News />} />
                <Route path="/music" element={<Music />} />
                <Route path="/settings" element={<Settings/>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
  );
};
export default App;
