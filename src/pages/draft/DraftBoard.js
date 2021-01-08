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
    <section className='draft-board'>
      <header>
        <h3>draft board</h3>
        <Positions positions={positions} filterByPosition={filterByPosition} />
      </header>
      <article className='draft-table-container'>
        <UserVisiblePlayers
          visiblePlayers={visiblePlayers}
          handleUserPick={handleUserPick}
        />
      </article>
    </section>
  );
};

export default DraftBoard;
