import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        <div className='nav-container'>
          <Link to='/'>
            <button className='custom-btn nav-btn'>Home</button>
          </Link>
          <Link to='/history'>
            <button className='custom-btn nav-btn'>History</button>
          </Link>
        </div>
        <h5>
          You have no teams saved yet. Please complete a draft and then return
          to view your saved teams.
        </h5>
      </div>
    );
  }
  return (
    <section>
      <div className='nav-container'>
        <Link to='/'>
          <button className='custom-btn nav-btn'>Home</button>
        </Link>
        <Link to='/history'>
          <button className='custom-btn nav-btn'>History</button>
        </Link>
      </div>
      <h1>History</h1>
      <table>
        <thead>
          <tr>
            <th>Saved</th>
            <th>Team</th>
            <th>Record</th>
            <th colSpan='2'>PG</th>
            <th colSpan='2'>SG</th>
            <th colSpan='2'>SF</th>
            <th colSpan='2'>PF</th>
            <th colSpan='2'>C</th>
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
