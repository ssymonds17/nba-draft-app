import React, { useState, useEffect } from 'react';
import Positions from './Positions.js';
import UserAvailablePlayers from './UserAvailablePlayers.js';
import { useGlobalContext } from '../../context.js';
import players from '../../data/player';

const allPositions = [
  'all',
  ...new Set(players.map((player) => player.position))
];

const DraftBoard = () => {
  const { availablePlayers, updateAvailablePlayers } = useGlobalContext();
  const [userAvailablePlayers, setUserAvailablePlayers] = useState(
    availablePlayers
  );
  // Need to figure out how to stop returning to 'all' view after a player has been selected (maybe in action after a player is picked the computer will start picking so by the time it comes back to the user it wouldn't be so strange to be back on all players again)
  const [positions, setPositions] = useState(allPositions);

  useEffect(() => {
    setUserAvailablePlayers(availablePlayers);
  }, [availablePlayers]);

  const filterByPosition = (position) => {
    if (position === 'all') {
      setUserAvailablePlayers(availablePlayers);
      return;
    }
    const newPlayers = availablePlayers.filter(
      (player) => player.position === position
    );
    setUserAvailablePlayers(newPlayers);
  };

  return (
    <section style={{ border: 'solid black 3px' }}>
      <header>
        <h3>draft board</h3>
      </header>
      <Positions positions={positions} filterByPosition={filterByPosition} />
      <UserAvailablePlayers
        userAvailablePlayers={userAvailablePlayers}
        updateAvailablePlayers={updateAvailablePlayers}
      />
    </section>
  );
};

export default DraftBoard;
