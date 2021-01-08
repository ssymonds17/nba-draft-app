import React from 'react';
import Table from 'react-bootstrap/Table';
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
    <section className='draft-order'>
      <header>
        <h3>Draft Selections</h3>
      </header>
      <Table bordered responsive className='draft-table'>
        <thead>
          <tr>
            <th>round</th>
            <th>pick</th>
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
      </Table>
    </section>
  );
};

export default DraftOrder;
