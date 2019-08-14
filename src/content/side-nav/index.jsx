import React, { useContext } from "react";
import classes from "./SideNav.module.scss";
import { GlobalContext } from "../../context";
import Profile from "./profile";

export const SideNav = _ => {
  const { dispatch } = useContext(GlobalContext);
  const linkClick = name => _ => {
    window.history.pushState("", name, `${name.toLowerCase()}`);
    dispatch({ type: "setActiveContent", payload: name.toLowerCase() });
  };
  console.log(`Rendering: SideNav. \nTotal renders: ${++window.totalRenders}`);
  return (
    <div>
      <Profile />
      {[
        { icon: "fas fa-columns", name: "Dashboard" },
        { icon: "fas fa-dollar-sign", name: "Financials" },
        { icon: "fas fa-user-circle", name: "Profile" },
        { icon: "fab fa-wpforms", name: "Form" },
        { icon: "fas fa-sliders-h", name: "Settings" }
      ].map(({ icon, name }) => (
        <div key={name} className={classes.route}>
          <div className={classes.routeInfo} onClick={linkClick(name)}>
            <i className={icon} />
            <div>{name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
