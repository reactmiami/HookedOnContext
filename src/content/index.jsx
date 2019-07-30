import React, { useState, memo } from "react";
import classes from "./Content.module.scss";
import { SideNav } from "./side-nav";
import { Form } from "./form";
import { Settings } from "./settings";
import { ProfileContext } from "../context";

export const Content = memo(_ => {
  const [activeContent, setActiveContent] = useState(
    window.location.pathname.split("/")[1] || "dashboard"
  );
  const [profile, setProfile] = useState({
    firstName: "Jonathan",
    lastName: "Rose"
  });
  return (
    <ProfileContext.Provider value={{ setProfile, profile }}>
      <div className={classes.content}>
        <div className={classes.sideNavWrapper}>
          <SideNav setActiveContent={setActiveContent} />
        </div>
        <div className={classes.formWrapper}>
          {
            {
              dashboard: <div>Dashboard</div>,
              financials: <div>Financials</div>,
              profile: <div>Profile</div>,
              settings: <Settings />,
              form: <Form />
            }[activeContent]
          }
        </div>
      </div>
    </ProfileContext.Provider>
  );
});
