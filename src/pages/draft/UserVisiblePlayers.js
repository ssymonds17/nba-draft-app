import React from 'react';
import Table from 'react-bootstrap/Table';

const UserVisiblePlayers = ({ visiblePlayers, handleUserPick }) => {
  if (visiblePlayers.length < 1) {
    return (
      <section>
        <p>Two players have already been drafted at this position</p>
      </section>
    );
  }
  return (
    <Table bordered responsive className='draft-table'>
      <thead>
        <tr>
          <th>player</th>
          <th>position</th>
          <th>years active</th>
        </tr>
      </thead>
      <tbody>
        {visiblePlayers.map((player) => {
          const { id, name, position, year_from, year_to } = player;
          return (
            <tr key={id}>
              <td
                className='draft-player-name'
                onClick={() => handleUserPick(player)}
              >
                {name}
              </td>
              <td>{position}</td>
              <td>
                {year_from}-{year_to}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default UserVisiblePlayers;
