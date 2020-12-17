import React, { useState, useEffect, useContext } from 'react';
import players from './data/player';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState(null); //Reset default value after draftboard dev is complete
  const [competingLocations, setCompetingLocations] = useState([]);
  const [availablePlayers, setAvailablePlayers] = useState(players);
  const [userVisiblePlayers, setUserVisiblePlayers] = useState(
    availablePlayers
  );
  const [userSquad, setUserSquad] = useState({
    PG: [],
    SG: [],
    SF: [],
    PF: [],
    C: []
  });

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
  const selectUserPlayers = (player) => {
    userSquad[player.position].push(player);
  };
  useEffect(() => {
    setUserVisiblePlayers(availablePlayers);
  }, [availablePlayers]);

  return (
    <AppContext.Provider
      value={{
        userLocation,
        chooseLocation,
        chooseOpponents,
        availablePlayers,
        updateAvailablePlayers,
        userVisiblePlayers,
        setUserVisiblePlayers,
        userSquad,
        selectUserPlayers
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
