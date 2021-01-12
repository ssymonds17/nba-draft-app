import React from 'react';
import Table from 'react-bootstrap/Table';

const MatchupView = ({
  currentOpponent,
  userLocation,
  userSquad,
  matchupIndex,
  userScore,
  opponentScore
}) => {
  if (!currentOpponent) {
    return (
      <>
        <div className='matchup-main'>
          <h3 style={{ paddingTop: '2rem' }}>Matchup 1</h3>
          <table className='matchup-table' style={{ marginLeft: '2.5rem' }}>
            <tbody>
              <tr>
                <td className='column-left'>_____________________</td>
                <td>PG</td>
                <td className='column-right'>_____________________</td>
              </tr>
              <tr>
                <td className='column-left'>_____________________</td>
                <td>SG</td>
                <td className='column-right'>_____________________</td>
              </tr>
              <tr>
                <td className='column-left'>_____________________</td>
                <td>SF</td>
                <td className='column-right'>_____________________</td>
              </tr>
              <tr>
                <td className='column-left'>_____________________</td>
                <td>PF</td>
                <td className='column-right'>_____________________</td>
              </tr>
              <tr>
                <td className='column-left'>_____________________</td>
                <td>C</td>
                <td className='column-right'>_____________________</td>
              </tr>
              <tr>
                <td className='column-left'>_____________________</td>
                <td>Reserve</td>
                <td className='column-right'>_____________________</td>
              </tr>
              <tr>
                <td className='column-left'>_____________________</td>
                <td>Reserve</td>
                <td className='column-right'>_____________________</td>
              </tr>
              <tr>
                <td className='column-left'>_____________________</td>
                <td>Reserve</td>
                <td className='column-right'>_____________________</td>
              </tr>
              <tr>
                <td className='column-left'>_____________________</td>
                <td>Reserve</td>
                <td className='column-right'>_____________________</td>
              </tr>
              <tr>
                <td className='column-left'>_____________________</td>
                <td>Reserve</td>
                <td className='column-right'>_____________________</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
  return (
    <section className='matchup-main'>
      <header className='matchup-header'>
        <h3>Matchup {matchupIndex + 1}</h3>
      </header>
      {userScore === 0 && (
        <h3>
          {userLocation.city} vs {currentOpponent.city}
        </h3>
      )}
      {userScore > 0 && (
        <h3>
          {userLocation.city} ({userScore}) vs {currentOpponent.city} (
          {opponentScore})
        </h3>
      )}
      <table className='matchup-table'>
        <tbody>
          <tr>
            <td className='column-left'>{userSquad.PG[0].name}</td>
            <td>PG</td>
            <td className='column-right'>{currentOpponent.PG[0].name}</td>
          </tr>
          <tr>
            <td className='column-left'>{userSquad.SG[0].name}</td>
            <td>SG</td>
            <td className='column-right'>{currentOpponent.SG[0].name}</td>
          </tr>
          <tr>
            <td className='column-left'>{userSquad.SF[0].name}</td>
            <td>SF</td>
            <td className='column-right'>{currentOpponent.SF[0].name}</td>
          </tr>
          <tr>
            <td className='column-left'>{userSquad.PF[0].name}</td>
            <td>PF</td>
            <td className='column-right'>{currentOpponent.PF[0].name}</td>
          </tr>
          <tr>
            <td className='column-left'>{userSquad.C[0].name}</td>
            <td>C</td>
            <td className='column-right'>{currentOpponent.C[0].name}</td>
          </tr>
          <tr>
            <td className='column-left'>{userSquad.PG[1].name}</td>
            <td>Reserve</td>
            <td className='column-right'>{currentOpponent.PG[1].name}</td>
          </tr>
          <tr>
            <td className='column-left'>{userSquad.SG[1].name}</td>
            <td>Reserve</td>
            <td className='column-right'>{currentOpponent.SG[1].name}</td>
          </tr>
          <tr>
            <td className='column-left'>{userSquad.SF[1].name}</td>
            <td>Reserve</td>
            <td className='column-right'>{currentOpponent.SF[1].name}</td>
          </tr>
          <tr>
            <td className='column-left'>{userSquad.PF[1].name}</td>
            <td>Reserve</td>
            <td className='column-right'>{currentOpponent.PF[1].name}</td>
          </tr>
          <tr>
            <td className='column-left'>{userSquad.C[1].name}</td>
            <td>Reserve</td>
            <td className='column-right'>{currentOpponent.C[1].name}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default MatchupView;
