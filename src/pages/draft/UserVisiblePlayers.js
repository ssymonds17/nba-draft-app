import React from 'react';

const UserVisiblePlayers = ({ visiblePlayers, handleUserPick }) => {
  if (visiblePlayers.length < 1) {
    return (
      <section>
        <p>Two players have already been drafted at this position</p>
      </section>
    );
  }
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
        {visiblePlayers.map((player) => {
          const { id, name, position, year_from, year_to } = player;
          return (
            <tr key={id}>
              <td onClick={() => handleUserPick(player)}>{name}</td>
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
