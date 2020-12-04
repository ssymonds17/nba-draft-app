import React from 'react';

import Data from '../data/PlayerData.json';

export default function DraftBoard() {
 const data = Data;
 return <table>
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
}