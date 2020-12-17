import React from 'react';

const UserVisiblePlayers = ({ userVisiblePlayers, updateAvailablePlayers }) => {
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
        {userVisiblePlayers.map((player) => {
          const { id, name, position, year_from, year_to } = player;
          return (
            <tr key={id}>
              <td onClick={() => updateAvailablePlayers(id)}>{name}</td>
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

export default UserVisiblePlayers;
