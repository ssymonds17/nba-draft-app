import React, { useEffect, useState } from 'react';

const History = () => {
  const [history, setHistory] = useState(null);

  const getHistory = () => {
    const newHistory = JSON.parse(localStorage.getItem('history'));
    setHistory(newHistory);
  };
  useEffect(() => {
    getHistory();
  }, []);

  if (!history) {
    return (
      <div>
        <button className='btn-primary'>Home</button>
        <h5>
          You have no teams saved yet. Please complete a draft and then return
          to view your saved teams.
        </h5>
      </div>
    );
  }
  return (
    <section>
      <button className='btn-primary'>Home</button>
      <h1>History</h1>
      <table>
        <thead>
          <tr>
            {/* {Make each position span two columns} */}
            <th>Saved</th>
            <th>Team</th>
            <th>Record</th>
            <th colspan='2'>PG</th>
            <th colspan='2'>SG</th>
            <th colspan='2'>SF</th>
            <th colspan='2'>PF</th>
            <th colspan='2'>C</th>
            <th>Team Rating</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry) => {
            const { dateAndTime, name, record, roster, teamRating } = entry;
            return (
              <tr key={dateAndTime}>
                <td>{dateAndTime}</td>
                <td>{name}</td>
                <td>{record}</td>
                <td>{roster.pgOne}</td>
                <td>{roster.pgTwo}</td>
                <td>{roster.sgOne}</td>
                <td>{roster.sgTwo}</td>
                <td>{roster.sfOne}</td>
                <td>{roster.sfTwo}</td>
                <td>{roster.pfOne}</td>
                <td>{roster.pfTwo}</td>
                <td>{roster.cOne}</td>
                <td>{roster.cTwo}</td>
                <td>{teamRating}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default History;
