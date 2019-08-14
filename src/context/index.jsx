import React, { useState } from 'react';
export const SnackbarContext = React.createContext({});
export const SnackbarContextProvider = ({ children }) => {
  const messageState = useState('');
  console.log(`Rendering: SnackbarContextProvider. \nTotal renders: ${++window.totalRenders}`);
  return <SnackbarContext.Provider value={messageState}>{children}</SnackbarContext.Provider>;
};

export const ProfileContext = React.createContext({});
export const ProfileContextProvider = ({ children }) => {
  const profileState = useState({
    firstName: 'Dan',
    lastName: 'Abramov'
  });
  console.log(`Rendering: ProfileContextProvider. \nTotal renders: ${++window.totalRenders}`);
  return <ProfileContext.Provider value={profileState}>{children}</ProfileContext.Provider>;
};
