import React, { useState } from "react";
import { SnackBar } from "./snack-bar";
import { Content } from "./content";
import classes from "./App.module.scss";
import { SnackbarContext } from "./context";

const App = _ => {
  const [message, setMessage] = useState("");
  return (
    <SnackbarContext.Provider value={{ setMessage }}>
      <SnackBar message={message} setMessage={setMessage} />
      <div className={classes.app}>
        <Content />
      </div>
    </SnackbarContext.Provider>
  );
};

export default App;
