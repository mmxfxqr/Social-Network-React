import React from "react";
import s from "./Dialogs.module.css";
import MessageItem from "./messageItem/MessageItem";
import DialogItem from "./dialogItem/DialogItem";

const Dialogs = (props) => {
  let dialogElements = props.messagePage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} key={d.id} />
  ));
  let messagesElements = props.messagePage.messages.map((m) => (
    <MessageItem message={m.message} key={m.id} />
  ));

  let newMessageElement = React.createRef();
  let addMessage = () => {
    props.dispatch({type:'ADD-MESSAGE'});
  };
  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch({type:'UPDATE-NEW-MESSAGE-TEXT', newText : text});
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.writeMessage}>
          <textarea
            onChange={onMessageChange}
            ref={newMessageElement}
            value={props.messagePage.newMessageText}
          />
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
