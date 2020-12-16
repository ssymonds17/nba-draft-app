import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState('');

  const chooseLocation = (location) => {
    setUserLocation(location);
  };
  return (
    <AppContext.Provider value={{ userLocation, chooseLocation }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
