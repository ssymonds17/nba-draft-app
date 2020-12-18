import React from 'react';

const UserVisiblePlayers = ({
  visiblePlayers,
  updateAvailablePlayers,
  updateDraftablePlayers,
  selectUserPlayers
}) => {
  const handleClick = (player) => {
    selectUserPlayers(player);
    updateAvailablePlayers(player.id);
    updateDraftablePlayers(player.id);
  };
  if (visiblePlayers.length < 1) {
    return (
      <section>
        <p>Two players have already been selected</p>
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
              <td onClick={() => handleClick(player)}>{name}</td>
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
