import React, { useState, useEffect } from 'react';
import draft from '../../data/draft';
import { useGlobalContext } from '../../context';

const DraftOrder = () => {
  const { competingLocations } = useGlobalContext();
  const [draftData, setDraftData] = useState(draft);

  useEffect(() => {
    console.log(competingLocations);
  }, [competingLocations]);

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
            <th>selection</th>
          </tr>
        </thead>
        <tbody>
          {draftData.map((draftpick) => {
            const { round, pick, location, selection } = draftpick;
            return (
              <tr key={pick}>
                <td>{round}</td>
                <td>{location.city && location.city}</td>
                <td>{selection.name && selection.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default DraftOrder;
