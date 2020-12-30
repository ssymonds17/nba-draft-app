import React, { useState, useEffect } from 'react';
import Positions from './Positions.js';
import UserVisiblePlayers from './UserVisiblePlayers.js';
import { useGlobalContext } from '../../context.js';
import players from '../../data/player';

const allPositions = [
  'all',
  ...new Set(players.map((player) => player.position))
];

const DraftBoard = ({ handleUserPick }) => {
  const { draftablePlayers } = useGlobalContext();
  const [positions, setPositions] = useState(allPositions);
  const [visiblePlayers, setVisiblePlayers] = useState(draftablePlayers);

  const filterByPosition = (position) => {
    if (position === 'all') {
      setVisiblePlayers(draftablePlayers);
      return;
    }
    const newPlayers = draftablePlayers.filter(
      (player) => player.position === position
    );
    setVisiblePlayers(newPlayers);
  };

  useEffect(() => {
    setVisiblePlayers(draftablePlayers);
  }, [draftablePlayers]);

  return (
    <section>
      <header>
        <h3>draft board</h3>
      </header>
      <Positions positions={positions} filterByPosition={filterByPosition} />
      <UserVisiblePlayers
        visiblePlayers={visiblePlayers}
        handleUserPick={handleUserPick}
      />
    </section>
  );
};

export default DraftBoard;
