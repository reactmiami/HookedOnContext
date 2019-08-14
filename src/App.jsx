import React, { useReducer } from "react";
import { SnackBar } from "./snack-bar";
import { Content } from "./content";
import classes from "./App.module.scss";
import { GlobalContext } from "./context";

const App = _ => {
  console.log(`Rendering: App. \nTotal renders: ${++window.totalRenders}`);
  const reducer = (state, { type, payload }) =>
    ({
      setMessage: { ...state, message: payload },
      setProfile: { ...state, profile: payload },
      setActiveContent: { ...state, activeContent: payload }
    }[type] || state);
  const [state, dispatch] = useReducer(reducer, {
    message: String(),
    profile: { firstName: "Dan", lastName: "Abramov" },
    activeContent: window.location.pathname.split("/")[1] || "dashboard"
  });
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <SnackBar />
      <div className={classes.app}>
        <Content />
      </div>
    </GlobalContext.Provider>
  );
};

export default App;
