import React from 'react';
import DraftBoard from './DraftBoard';

export default function DraftView() {
 return <div style={{ display: 'flex', justifyContent: 'center' }}>
  <div className="upper-container">
   <DraftBoard />
   <div>User's Team</div>
  </div>
  <div className="lower-container">
   <div>Draft Order</div>
   <div>Opponent's Team</div>
  </div>
 </div>
}