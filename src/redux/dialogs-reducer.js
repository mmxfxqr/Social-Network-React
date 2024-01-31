import ava1 from "../images/avatars/1.png";
import ava2 from "../images/avatars/2.png";
import ava3 from "../images/avatars/3.png";
import ava4 from "../images/avatars/4.png";
import ava5 from "../images/avatars/5.png";
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = ''

let initialState = {
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
}
const dialogsReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_MESSAGE:
      let newMessage = {
        id: 4,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type:UPDATE_NEW_MESSAGE_TEXT, newText:text});
export default dialogsReducer;
