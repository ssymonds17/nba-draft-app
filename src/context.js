import React, { useState, useEffect, useContext } from 'react';
import players from './data/player';
import draft from './data/draft';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [competingLocations, setCompetingLocations] = useState([]);
  const [draftData, setDraftData] = useState(draft);
  const [availablePlayers, setAvailablePlayers] = useState(players);
  const [draftablePlayers, setDraftablePlayers] = useState(players);
  const [userSquad, setUserSquad] = useState({
    PG: [],
    SG: [],
    SF: [],
    PF: [],
    C: []
  });
  const [squads, setSquads] = useState([
    [{ city: 'one', PG: [], SG: [], SF: [], PF: [], C: [] }],
    [{ city: 'two', PG: [], SG: [], SF: [], PF: [], C: [] }],
    [{ city: 'three', PG: [], SG: [], SF: [], PF: [], C: [] }],
    [{ city: 'four', PG: [], SG: [], SF: [], PF: [], C: [] }],
    [{ city: 'five', PG: [], SG: [], SF: [], PF: [], C: [] }],
    [{ city: 'six', PG: [], SG: [], SF: [], PF: [], C: [] }],
    [{ city: 'seven', PG: [], SG: [], SF: [], PF: [], C: [] }],
    [{ city: 'eight', PG: [], SG: [], SF: [], PF: [], C: [] }],
    [{ city: 'nine', PG: [], SG: [], SF: [], PF: [], C: [] }],
    [{ city: 'ten', PG: [], SG: [], SF: [], PF: [], C: [] }]
  ]);
  const [currentPick, setCurrentPick] = useState(1);
  const [isUser, setIsUser] = useState(false);
  const [nextTeam, setNextTeam] = useState('');
  const [lastPickedPlayer, setLastPickedPlayer] = useState(null);
  const [lastTeamToPick, setLastTeamToPick] = useState(null);

  // Functions to setup teams
  const initialiseSquadLocations = () => {
    let locationNames = [];
    competingLocations.forEach((location) => {
      locationNames.push(location.city);
    });
    squads.forEach((team, index) => {
      team[0].city = locationNames[index];
    });
  };
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
  const initialiseTeamOrder = () => {
    let newData = [...draftData];
    newData.forEach((pick) =>
      competingLocations.forEach((location) => {
        if (pick.team_number === location.team_number) {
          pick.location = location.city;
        }
      })
    );
    setDraftData(newData);
  };
  // Functions to handle both user and computer picks
  const addPlayerToDraftData = (id) => {
    let newData = [...draftData];
    const findPlayer = [...availablePlayers].filter(
      (player) => player.id === id
    );
    newData.forEach((entry) => {
      if (entry.pick === currentPick) {
        entry.player_name = findPlayer[0].name;
        entry.player_position = findPlayer[0].position;
      }
    });
    setCurrentPick(currentPick + 1);
    setDraftData(newData);
  };
  const updateAvailablePlayers = (id) => {
    const newList = availablePlayers.filter((player) => player.id !== id);
    setAvailablePlayers(newList);
  };
  const addSelectedPlayerToSquad = (player) => {
    let pickingTeam;
    let pickingSquad;
    let currentIndex;
    let array = [];
    draftData.forEach((entry) => {
      if (entry.pick === currentPick) {
        pickingTeam = entry.location;
      }
    });
    squads.forEach((squad, index) => {
      if (squad[0].city === pickingTeam) {
        currentIndex = index;
        pickingSquad = squad[0];
      }
    });
    pickingSquad[player.position].push(player);
    array.push(pickingSquad);
    squads[currentIndex] = array;
  };
  // Functions for the computer player selection
  const getPickingTeam = () => {
    let pickingTeam;
    draftData.forEach((entry) => {
      if (entry.pick === currentPick) {
        pickingTeam = entry.location;
      }
    });
    return pickingTeam;
  };
  const getPickingSquad = (pickingTeam) => {
    let pickingSquad;
    squads.forEach((squad) => {
      if (squad[0].city === pickingTeam) {
        pickingSquad = squad[0];
      }
    });
    return pickingSquad;
  };
  const filterFullPositions = (pickingSquad) => {
    let freePositions = [];
    for (const position in pickingSquad) {
      if (pickingSquad[position].length < 2) {
        freePositions.push(position);
      }
    }
    return freePositions;
  };
  const setCurrentTeamAvailablePlayers = (freePositions) => {
    const currentTeamAvailablePlayers = freePositions
      .map((position) =>
        [...availablePlayers].filter((player) => player.position === position)
      )
      .flat();
    return currentTeamAvailablePlayers;
  };
  const randomiseComputerPlayerSelection = (
    currentTeamAvailablePlayers,
    playerPool
  ) => {
    const rankedPlayers = currentTeamAvailablePlayers
      .sort((a, b) => b.rating - a.rating)
      .slice(0, playerPool)
      .sort(() => Math.random() - 0.5);
    return rankedPlayers;
  };
  const opponentPlayerSelection = () => {
    // Determine the currently picking team by matching the location with the currentPick
    const pickingTeam = getPickingTeam();
    setLastTeamToPick(pickingTeam);
    // Grab the current squad for that team
    const pickingSquad = getPickingSquad(pickingTeam);
    // Find which positions in the current squad already have two players selected
    const freePositions = filterFullPositions(pickingSquad);
    // Filter from available players all players from the positions where two players have already been selected
    const currentTeamAvailablePlayers = setCurrentTeamAvailablePlayers(
      freePositions
    );
    // Determine whether the amount of players available to the current team is more or less than 20. If it's less then the value will be set at the length of the array.
    const playerPool =
      currentTeamAvailablePlayers.length >= 10
        ? 10
        : currentTeamAvailablePlayers.length;
    // Sort the resulting available players by rating (highest to lowest), grab only the top 20 (or keep all if there are less than 20 players remaining) and randomise the order
    const randomPlayerSelection = randomiseComputerPlayerSelection(
      currentTeamAvailablePlayers,
      playerPool
    );
    // Select the player at the top of the random list and return that player
    const chosenPlayer = randomPlayerSelection.shift();
    setLastPickedPlayer(chosenPlayer);
    return chosenPlayer;
  };
  const handlePlayerSelection = () => {
    const player = opponentPlayerSelection();
    addSelectedPlayerToSquad(player);
    addPlayerToDraftData(player.id);
    updateAvailablePlayers(player.id);
    updateDraftablePlayers(player.id);
  };
  // Functions to handle user picks
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
    const filterChosenPlayer = [...availablePlayers].filter(
      (player) => player.id !== id
    );
    const newDraftablePlayers = freePositions
      .map((position) =>
        filterChosenPlayer.filter((player) => player.position === position)
      )
      .flat();
    setDraftablePlayers(newDraftablePlayers);
  };
  const updateLastPicked = (player) => {
    const pickingTeam = getPickingTeam();
    setLastTeamToPick(pickingTeam);
    setLastPickedPlayer(player);
  };
  const updateIsUser = () => {
    const pickingTeam = getPickingTeam();
    if (pickingTeam === userLocation.city) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  };
  const getNextTeam = () => {
    if (availablePlayers.length === 1) return;

    setNextTeam(
      [...draftData].find((entry) => entry.pick === currentPick + 1).location
    );
  };
  const doubleUserForceAction = () => {
    if (availablePlayers.length === 1) {
      return;
    } else if (currentPick === 99) {
      let first = [...draftData].find((entry) => entry.pick === currentPick + 1)
        .location;
      setNextTeam(first);
    } else {
      let second = [...draftData].find(
        (entry) => entry.pick === currentPick + 2
      ).location;
      setNextTeam(second);
      if (second !== userLocation.city) {
        return true;
      }
    }
  };
  const handleUserSelection = (player) => {
    updateLastPicked(player);
    addSelectedPlayerToSquad(player);
    addPlayerToDraftData(player.id);
    selectUserPlayers(player);
    updateAvailablePlayers(player.id);
    updateDraftablePlayers(player.id);
  };

  useEffect(() => {
    initialiseTeamOrder();
    initialiseSquadLocations();
  }, [competingLocations]);

  return (
    <AppContext.Provider
      value={{
        userLocation,
        chooseLocation,
        competingLocations,
        chooseOpponents,
        draftData,
        availablePlayers,
        updateAvailablePlayers,
        draftablePlayers,
        updateDraftablePlayers,
        userSquad,
        selectUserPlayers,
        addPlayerToDraftData,
        addSelectedPlayerToSquad,
        squads,
        handlePlayerSelection,
        lastPickedPlayer,
        lastTeamToPick,
        getPickingTeam,
        updateIsUser,
        handleUserSelection,
        isUser,
        nextTeam,
        getNextTeam,
        doubleUserForceAction,
        currentPick
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
