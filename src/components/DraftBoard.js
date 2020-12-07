import React from 'react';
import Table from 'react-bootstrap/Table';

import PlayerData from '../data/PlayerData.json';

export default function DraftBoard() {
 const data = PlayerData;
 return <div>
  <h2>Draft Board</h2>
  <Table responsive bordered style={{ height: '500px', display: 'block', overflowY: 'auto' }}>
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
  </Table>
 </div>
}