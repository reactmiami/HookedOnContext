import React, { useState } from 'react';
import classes from './Content.module.scss';
import { SideNav } from './side-nav';
import { ProfileContextProvider } from '../context';
import { Settings } from './settings';
import { Form } from './form';

export const Content = _ => {
  const [activeContent, setActiveContent] = useState(window.location.pathname.split('/')[1] || 'dashboard');
  console.log(`Rendering: Content. \nTotal renders: ${++window.totalRenders}`);
  return (
    <ProfileContextProvider>
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
    </ProfileContextProvider>
  );
};
