import ava1 from "../images/avatars/1.png";
import ava2 from "../images/avatars/2.png";
import ava3 from "../images/avatars/3.png";
import ava4 from "../images/avatars/4.png";
import ava5 from "../images/avatars/5.png";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are u", like__count: "15" },
        { id: 2, message: "It's my first post", like__count: "25" },
        { id: 3, message: "Bye", like__count: "35" },
        {
          id: 4,
          message: "grq9pogiqrwhregiogrqeiohqgoqghoirqe",
          like__count: "35",
        },
      ],
      newPostText: "",
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: "Саша", ava: ava1 },
        { id: 2, name: "Борис", ava: ava2 },
        { id: 3, name: "Денис", ava: ava3 },
        { id: 4, name: "Екатерина", ava: ava4 },
        { id: 5, name: "Дмитрий", ava: ava5 },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Wat's Up" },
        { id: 3, message: "Bye" },
      ],
      newMessageText: "",
    },
  },
  _callSubscriber() {
    console.log("no subscriber(observer)");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        like__count: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber();
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber();
    }
    else if(action.type === "ADD-MESSAGE"){
      let newMessage = {
        id: 4,
        message: this._state.messagesPage.newMessageText,
      };
      this._state.messagesPage.messages.push(newMessage);
      this._state.messagesPage.newMessageText = "";
      this._callSubscriber();
    }
    else if(action.type === "UPDATE-NEW-MESSAGE-TEXT"){
      this._state.messagesPage.newMessageText = action.newText;
      this._callSubscriber();
    }
  },
};
window.store = store;
export default store;
