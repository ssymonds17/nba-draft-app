import React from 'react';

import TeamData from '../data/TeamData.json';

export default function TeamSelection() {
 const data = TeamData;
 return <div>
  <ul style={{ display: "grid", gridTemplateColumns: "1fr repeat(3, 5fr)", listStyleType: "none", justifyContent: "space-between" }}>
   {
    data.map(team => (
     <li key={team.id}>
      <button style={{ width: "120px", height: "50px", marginBottom: "30px", fontSize: "15px" }}>{team.city}</button>
     </li>
    ))
   }
  </ul>
 </div>
}