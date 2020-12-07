import React from 'react';
import DraftBoard from './DraftBoard';
import UserTeam from './UserTeam';

export default function DraftView() {
 return <div style={{ display: 'flex' }}>
  <div className="left-container">
   <DraftBoard />
   <UserTeam />
  </div>
  <div className="right-container">
   <div>Draft Order</div>
   <div>Opponent's Team</div>
  </div>
 </div>
}