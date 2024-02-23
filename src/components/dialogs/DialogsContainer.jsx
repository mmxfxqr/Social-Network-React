import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return{
    messagesPage : state.messagesPage,
    isAuth : state.auth.isAuth
  }
}
let mapDispatchToProps = (dispatch) => {
  return{
    updateNewMessageText: (text) => {
      let action = updateNewMessageTextActionCreator(text);
      dispatch(action);
    },
    addMessage: () => {
      let action = addMessageActionCreator();
      dispatch(action);
    }
  }
} 
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);  

export default DialogsContainer;
