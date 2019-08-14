import React, { useState, useContext } from 'react';
import classes from './SnackBar.module.scss';
import { SnackbarContext } from '../context';

export const SnackBar = _ => {
  const [remove, setRemove] = useState(false);
  const [message, setMessage] = useContext(SnackbarContext);
  if (!message) return null;
  remove ? setTimeout(_ => setMessage('') || setRemove(false), 600) : setTimeout(_ => setRemove(true), 5000);
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
