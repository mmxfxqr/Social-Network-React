import React from "react";
import s from "./Dialogs.module.css";
import MessageItem from "./messageItem/MessageItem";
import DialogItem from "./dialogItem/DialogItem";

const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} key={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <MessageItem message={m.message} key={m.id} />
  ));
  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text)
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div className={s.writeMessage}>
          <textarea ref={newMessageElement}></textarea>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
