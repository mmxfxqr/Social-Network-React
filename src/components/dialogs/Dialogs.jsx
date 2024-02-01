import React from "react";
import s from "./Dialogs.module.css";
import MessageItem from "./messageItem/MessageItem";
import DialogItem from "./dialogItem/DialogItem";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
  let dialogElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} key={d.id} />
  ));
  let messagesElements = props.messages.map((m) => (
    <MessageItem message={m.message} key={m.id} />
  ));

  let newMessageElement = React.createRef();
  let onAddMessage = () => {
    props.addMessage()
  };
  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessageText(text);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div className={s.writeMessage}>
          <textarea
            onChange={onMessageChange}
            ref={newMessageElement}
            value={props.newMessageText}
          />
          <button onClick={onAddMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
