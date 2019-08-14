import React, { useState, useContext } from "react";
import { GlobalContext } from "../context";
import classes from "./SnackBar.module.scss";

export const SnackBar = _ => {
  const [remove, setRemove] = useState(false);
  const {
    state: { message },
    dispatch
  } = useContext(GlobalContext);
  if (!message) return null;
  remove
    ? setTimeout(
        _ =>
          dispatch({ type: "setMessage", payload: String() }) ||
          setRemove(false),
        600
      )
    : setTimeout(_ => setRemove(true), 5000);
  console.log(`Rendering: SnackBar. \nTotal renders: ${++window.totalRenders}`);
  return (
    <div>
      <div className={`${classes.wrapper} ${remove && classes.remove}`}>
        <i className="far fa-check-circle" />
        <div>{message}</div>
      </div>
    </div>
  );
};
