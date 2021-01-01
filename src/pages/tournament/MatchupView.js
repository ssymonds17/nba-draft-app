import React from 'react';

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
      <div>
        <h3>Nothing yet</h3>
      </div>
    );
  }
  return (
    <div>
      <h4>Matchup {matchupIndex + 1}</h4>
      <h3>
        {userLocation.city} ({userScore}) vs {currentOpponent.city} (
        {opponentScore})
      </h3>
      <table>
        <tbody>
          <tr>
            <td>{userSquad.PG[0].name}</td>
            <td>PG</td>
            <td>{currentOpponent.PG[0].name}</td>
          </tr>
          <tr>
            <td>{userSquad.SG[0].name}</td>
            <td>SG</td>
            <td>{currentOpponent.SG[0].name}</td>
          </tr>
          <tr>
            <td>{userSquad.SF[0].name}</td>
            <td>SF</td>
            <td>{currentOpponent.SF[0].name}</td>
          </tr>
          <tr>
            <td>{userSquad.PF[0].name}</td>
            <td>PF</td>
            <td>{currentOpponent.PF[0].name}</td>
          </tr>
          <tr>
            <td>{userSquad.C[0].name}</td>
            <td>C</td>
            <td>{currentOpponent.C[0].name}</td>
          </tr>
          <tr>
            <td>{userSquad.PG[1].name}</td>
            <td>Reserve</td>
            <td>{currentOpponent.PG[1].name}</td>
          </tr>
          <tr>
            <td>{userSquad.SG[1].name}</td>
            <td>Reserve</td>
            <td>{currentOpponent.SG[1].name}</td>
          </tr>
          <tr>
            <td>{userSquad.SF[1].name}</td>
            <td>Reserve</td>
            <td>{currentOpponent.SF[1].name}</td>
          </tr>
          <tr>
            <td>{userSquad.PF[1].name}</td>
            <td>Reserve</td>
            <td>{currentOpponent.PF[1].name}</td>
          </tr>
          <tr>
            <td>{userSquad.C[1].name}</td>
            <td>Reserve</td>
            <td>{currentOpponent.C[1].name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MatchupView;
