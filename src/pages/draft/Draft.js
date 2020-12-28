import React from 'react';
import DraftBoard from './DraftBoard';
import DraftOrder from './DraftOrder';
import ListOfOpponents from './ListOfOpponents';
import SingleTeamPlayers from './SingleTeamPlayers';
import { useGlobalContext } from '../../context';

const Draft = () => {
  const { userLocation } = useGlobalContext();
  return (
    <>
      <div>
        <button className='btn-primary'>Start Game</button>
        <button className='btn-primary'>Next Pick</button>
      </div>
      <div style={{ display: 'flex' }}>
        <DraftBoard />
        <DraftOrder />
      </div>
      <div style={{ display: 'flex' }}>
        <SingleTeamPlayers team={userLocation && userLocation.city} />
        <ListOfOpponents />
      </div>
    </>
  );
};

export default Draft;
