import React from 'react';
import DraftBoard from './DraftBoard';
import DraftOrder from './DraftOrder';
import ListOfOpponents from './ListOfOpponents';
import SingleTeamPlayers from './SingleTeamPlayers';

const Draft = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <DraftBoard />
        <DraftOrder />
      </div>
      <div style={{ display: 'flex' }}>
        <SingleTeamPlayers />
        <ListOfOpponents />
      </div>
    </>
  );
};

export default Draft;
