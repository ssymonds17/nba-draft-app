import React from 'react';

import PlayerData from '../data/PlayerData.json';

export default function DraftBoard() {
 const data = PlayerData;
 return <div>
  <h2>Draft Board</h2>
  <table style={{ height: '80%' }}>
   <thead>
    <tr>
     <th>Player</th>
     <th>Position</th>
     <th>Years</th>
    </tr>
   </thead>
   <tbody>
    {
     data.map(player => (
      <tr key={player.name}>
       <td>{player.name}</td>
       <td>{player.position}</td>
       <td>{player.year_from}-{player.year_to}</td>
      </tr>
     ))
    }
   </tbody>
  </table>
 </div>
}