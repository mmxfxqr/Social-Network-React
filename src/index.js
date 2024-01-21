import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let posts = [
  { id: 1, message: "Hi, how are u", like__count: "15" },
  { id: 2, message: "t's my first post", like__count: "25" },
  { id: 3, message: "Bye", like__count: "35" },
];
let dialogs = [
  { id: 1, name: "Саша" },
  { id: 2, name: "Борис" },
  { id: 3, name: "Денис" },
  { id: 4, name: "Екатерина" },
  { id: 5, name: "Дмитрий" },
];
let messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "Wat's Up" },
  { id: 3, message: "Bye" },
];

root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts ={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
