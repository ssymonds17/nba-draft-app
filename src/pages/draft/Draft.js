import React from 'react';
import DraftBoard from './DraftBoard';
import DraftOrder from './DraftOrder';
import UserTeamBoard from './UserTeamBoard';
import OpponentsTeamBoard from './OpponentsTeamBoard';
import SingleOppTeamBoard from './SingleOppTeamBoard';

const Draft = () => {
  return (
    <>
      <h1>Draft Component</h1>
      <DraftBoard />
      <DraftOrder />
      <UserTeamBoard />
      <OpponentsTeamBoard />
    </>
  );
};

export default Draft;
