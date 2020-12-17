import React, { useState, useContext } from 'react';
import players from './data/player';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [competingLocations, setCompetingLocations] = useState([]);
  const [availablePlayers, setAvailablePlayers] = useState(players);

  const chooseLocation = (location) => {
    setUserLocation(location);
  };
  const chooseOpponents = (teams, conference) => {
    const filteredByConf = teams.filter(
      (team) => team.conference === conference
    );
    setCompetingLocations(filteredByConf);
  };
  const updateAvailablePlayers = (id) => {
    const newList = availablePlayers.filter((player) => player.id !== id);
    setAvailablePlayers(newList);
  };
  return (
    <AppContext.Provider
      value={{
        userLocation,
        chooseLocation,
        chooseOpponents,
        availablePlayers,
        updateAvailablePlayers
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
