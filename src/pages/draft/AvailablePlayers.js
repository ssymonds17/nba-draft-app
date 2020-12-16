import React from 'react';

const AvailablePlayers = ({ availablePlayers }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>position</th>
          <th>years active</th>
        </tr>
      </thead>
      <tbody>
        {availablePlayers.map((player) => {
          const { id, name, position, year_from, year_to } = player;
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{position}</td>
              <td>
                {year_from}-{year_to}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AvailablePlayers;
