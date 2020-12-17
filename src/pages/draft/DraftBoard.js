import React, { useState } from 'react';
import Positions from './Positions.js';
import UserVisiblePlayers from './UserVisiblePlayers.js';
import { useGlobalContext } from '../../context.js';
import players from '../../data/player';

const allPositions = [
  'all',
  ...new Set(players.map((player) => player.position))
];

const DraftBoard = () => {
  const {
    availablePlayers,
    updateAvailablePlayers,
    userVisiblePlayers,
    setUserVisiblePlayers,
    selectUserPlayers
  } = useGlobalContext();
  // Need to figure out how to stop returning to 'all' view after a player has been selected (maybe in action after a player is picked the computer will start picking so by the time it comes back to the user it wouldn't be so strange to be back on all players)
  const [positions, setPositions] = useState(allPositions);

  const filterByPosition = (position) => {
    if (position === 'all') {
      setUserVisiblePlayers(availablePlayers);
      return;
    }
    const newPlayers = availablePlayers.filter(
      (player) => player.position === position
    );
    setUserVisiblePlayers(newPlayers);
    // Need to check if the resulting filtered list is empty then display to the user "You have already selected two {position}"
  };

  return (
    <section style={{ border: 'solid black 3px' }}>
      <header>
        <h3>draft board</h3>
      </header>
      <Positions positions={positions} filterByPosition={filterByPosition} />
      <UserVisiblePlayers
        userVisiblePlayers={userVisiblePlayers}
        updateAvailablePlayers={updateAvailablePlayers}
        selectUserPlayers={selectUserPlayers}
      />
    </section>
  );
};

export default DraftBoard;
