import React, { useState } from "react";
import classes from "./SnackBar.module.scss";

export const SnackBar = ({ message, setMessage }) => {
  if (!message) return null;
  const [remove, setRemove] = useState(false);
  remove
    ? setTimeout(_ => setMessage("") || setRemove(false), 600)
    : setTimeout(_ => setRemove(true), 5000);
  return (
    <div>
      <div className={`${classes.wrapper} ${remove && classes.remove}`}>
        <i className="far fa-check-circle" />
        <div>{message}</div>
      </div>
    </div>
  );
};
