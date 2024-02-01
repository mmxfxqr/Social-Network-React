import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
  debugger;
  let state = props.store.getState().messagesPage;
  let addMessage = () => {
    let action = addMessageActionCreator();
    props.store.dispatch(action);
  };
  let onMessageChange = (text) => {
    let action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };
  return (
    <Dialogs addMessage={addMessage} updateNewMessageText={onMessageChange} newMessageText={state.newMessageText} dialogs={state.dialogs} messages ={state.messages}/>
  );
};

export default DialogsContainer;
