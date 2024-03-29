import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return{
    messagesPage : state.messagesPage,
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
export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
