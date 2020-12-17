import React from 'react';
import DraftBoard from './DraftBoard';
import DraftOrder from './DraftOrder';
import ListOfOpponents from './ListOfOpponents';
import SingleTeamPlayers from './SingleTeamPlayers';

const Draft = () => {
  return (
    <>
      <DraftBoard />
      <DraftOrder />
      <SingleTeamPlayers />
      <ListOfOpponents />
    </>
  );
};

export default Draft;
