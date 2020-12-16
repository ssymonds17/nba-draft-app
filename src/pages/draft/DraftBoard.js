import React, { useState } from 'react';
import Positions from './Positions.js';
import AvailablePlayers from './AvailablePlayers.js';
import players from '../../data/player';

const allPositions = [
  'all',
  ...new Set(players.map((player) => player.position))
];

const DraftBoard = () => {
  const [availablePlayers, setAvailablePlayers] = useState(players);
  const [positions, setPositions] = useState(allPositions);

  const filterPositions = (position) => {
    if (position === 'all') {
      setAvailablePlayers(players);
      return;
    }
    const newPlayers = players.filter((player) => player.position === position);
    setAvailablePlayers(newPlayers);
  };

  return (
    <section style={{ border: 'solid black 3px' }}>
      <header>
        <h3>draft board</h3>
      </header>
      <Positions positions={positions} filterPositions={filterPositions} />
      <AvailablePlayers availablePlayers={availablePlayers} />
    </section>
  );
};

export default DraftBoard;
