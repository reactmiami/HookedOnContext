import React, { Component } from 'react';
import classes from './SnackBar.module.scss';
import { SnackbarContext } from '../context';

export class SnackBar extends Component {
  state = { remove: false };
  toggleRemove = remove => this.setState({ remove });
  render() {
    return (
      <SnackbarContext.Consumer>
        {([message, setMessage]) => {
          const { remove } = this.state;
          if (!message) return null;
          remove
            ? setTimeout(_ => setMessage('') || this.toggleRemove(false), 600)
            : setTimeout(_ => this.toggleRemove(true), 5000);
          return (
            <div>
              <div className={`${classes.wrapper} ${remove && classes.remove}`}>
                <i className="far fa-check-circle" />
                <div>{message}</div>
              </div>
            </div>
          );
        }}
      </SnackbarContext.Consumer>
    );
  }
}
