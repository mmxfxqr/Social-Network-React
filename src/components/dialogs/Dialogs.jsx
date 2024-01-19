import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={`${s.dialog}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const MessageItem = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Саша" id="1" />
        <DialogItem name="Борис" id="2" />
        <DialogItem name="Денис" id="3" />
        <DialogItem name="Екатерина" id="4" />
        <DialogItem name="Дмитрий" id="5" />
      </div>
      <div className={s.messages}>
        <MessageItem message="Hi" />
        <MessageItem message="Wat's Up" />
        <MessageItem message="Bye" />
      </div>
    </div>
  );
};

export default Dialogs;
