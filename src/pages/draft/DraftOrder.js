import React from 'react';
import { useGlobalContext } from '../../context';

const DraftOrder = () => {
  const { competingLocations, draftData } = useGlobalContext();

  if (competingLocations.length < 1) {
    return (
      <div>
        <h3>No teams selected yet</h3>
      </div>
    );
  }
  return (
    <section>
      <header>
        <h3>selections</h3>
      </header>
      <table>
        <thead>
          <tr>
            <th>round</th>
            <th>team</th>
            <th>player</th>
            <th>position</th>
          </tr>
        </thead>
        <tbody>
          {draftData.map((draftpick) => {
            const {
              round,
              pick,
              location,
              player_name,
              player_position
            } = draftpick;
            return (
              <tr key={pick}>
                <td>{round}</td>
                <td>{pick}</td>
                <td>{location && location}</td>
                <td>{player_name && player_name}</td>
                <td>{player_position && player_position}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default DraftOrder;
