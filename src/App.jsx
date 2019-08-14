import React from 'react';
import { SnackBar } from './snack-bar/SnackBar.renderProps';
import { Content } from './content';
import classes from './App.module.scss';
import { SnackbarContextProvider } from './context';

const App = _ => {
  console.log(`Rendering: App. \nTotal renders: ${++window.totalRenders}`);
  return (
    <SnackbarContextProvider>
      <SnackBar />
      <div className={classes.app}>
        <Content />
      </div>
    </SnackbarContextProvider>
  );
};

export default App;
