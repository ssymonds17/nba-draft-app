import React, { useState, useContext } from 'react';
import players from './data/player';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [competingLocations, setCompetingLocations] = useState([]);
  const [availablePlayers, setAvailablePlayers] = useState(players);
  const [draftablePlayers, setDraftablePlayers] = useState(players);
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
    const filterAndRandom = teams
      .filter((team) => team.conference === conference)
      .sort(() => Math.random() - 0.5);
    let newOrder = [];
    filterAndRandom.forEach((location, index) => {
      location.team_number = index + 1;
      newOrder.push(location);
    });
    setCompetingLocations(newOrder);
  };
  const updateAvailablePlayers = (id) => {
    const newList = availablePlayers.filter((player) => player.id !== id);
    setAvailablePlayers(newList);
  };
  const selectUserPlayers = (player) => {
    userSquad[player.position].push(player);
  };
  const updateDraftablePlayers = (id) => {
    let freePositions = [];
    for (const position in userSquad) {
      if (userSquad[position].length < 2) {
        freePositions.push(position);
      }
    }
    const filterChosenPlayer = availablePlayers.filter(
      (player) => player.id !== id
    );
    let newDraftablePlayers = freePositions
      .map((position) =>
        filterChosenPlayer.filter((player) => player.position === position)
      )
      .flat();
    setDraftablePlayers(newDraftablePlayers);
  };

  return (
    <AppContext.Provider
      value={{
        userLocation,
        chooseLocation,
        competingLocations,
        chooseOpponents,
        availablePlayers,
        updateAvailablePlayers,
        draftablePlayers,
        updateDraftablePlayers,
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
