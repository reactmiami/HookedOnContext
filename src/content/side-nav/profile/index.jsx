import React, { useContext } from "react";
import classes from "./Profile.module.scss";
import { GlobalContext } from "../../../context";

export default _ => {
  const {
    state: { profile }
  } = useContext(GlobalContext);
  console.log(`Rendering: Profile. \nTotal renders: ${++window.totalRenders}`);
  return (
    <div className={classes.profileCard}>
      <div className={classes.name}>
        {`${profile.firstName} ${profile.lastName}`}
      </div>
      <div>Administrator</div>
    </div>
  );
};
