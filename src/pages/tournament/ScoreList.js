import React from 'react';

const ScoreList = ({ opponentLocations, wins, losses, results }) => {
  return (
    <section>
      <article>
        <h4>Score List</h4>
        <h5>
          Record: {wins} - {losses}
        </h5>
        <table>
          <thead>
            <tr>
              <th>Opponent</th>
              <th>Result</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {opponentLocations.map((location, index) => {
              const { city } = location;
              return (
                <tr key={index}>
                  <td>{city}</td>
                  <td>{results[index] ? results[index].isWin : ''}</td>
                  <td>{results[index] ? results[index].score : ''}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </article>
    </section>
  );
};

export default ScoreList;
