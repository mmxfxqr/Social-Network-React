import React from "react";
import s from "./Dialogs.module.css";
import MessageItem from "./messageItem/MessageItem";
import DialogItem from "./dialogItem/DialogItem";

const Dialogs = (props) => {
  let dialogElements = props.state.dialogs.map((d) => (
    
    <DialogItem name={d.name} id={d.id}/>
  ));
  let messagesElements = props.state.messages.map((m) => (
    <MessageItem message={m.message} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
