import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context';
import ScoreList from './ScoreList';
import MatchupView from './MatchupView';
import { Modal } from 'react-bootstrap';

const Tournament = () => {
  const {
    squads,
    userLocation,
    competingLocations,
    userSquad
  } = useGlobalContext();
  const [opponentLocations, setOpponentLocations] = useState([]);
  const [matchupIndex, setMatchupIndex] = useState(0);
  const [currentOpponent, setCurrentOpponent] = useState(null);
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [results, setResults] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const updateOpponentLocations = () => {
    const newLocations = [...competingLocations].filter(
      (location) => location.city !== userLocation.city
    );
    setOpponentLocations(newLocations);
  };
  const getCurrentOpponent = () => {
    const opponentName = opponentLocations[matchupIndex].city;
    let newSquad;
    squads.forEach((squad) => {
      if (squad[0].city === opponentName) {
        newSquad = squad[0];
      }
    });
    setCurrentOpponent(newSquad);
    setUserScore(0);
    setOpponentScore(0);
  };
  const getUserRating = () => {
    let ratings = [];
    for (const [key, value] of Object.entries(userSquad)) {
      for (const players of value) {
        ratings.push(players.rating);
      }
    }
    return ratings.reduce((a, b) => a + b);
  };
  const getOpponentRating = () => {
    let ratings = [];
    let newOpponent = { ...currentOpponent };
    delete newOpponent.city;
    for (const [key, value] of Object.entries(newOpponent)) {
      for (const players of value) {
        ratings.push(players.rating);
      }
    }
    return ratings.reduce((a, b) => a + b);
  };
  const runGame = () => {
    // Set a basescore between 85 and 150 from which the final score will be decided from
    const baseScore = Math.floor(85 + Math.random() * (150 + 1 - 85));
    let newA = getUserRating();
    let newB = getOpponentRating();
    let difference;
    let isWin;
    // If the scores are tied, flip a coin to decide the winner
    if (newA === newB) {
      const oneOrTwo = Math.floor(Math.random() * 2 + 1);
      if (oneOrTwo === 1) {
        newA += 1;
      } else {
        newB += 1;
      }
    }
    // Find out the margin of victory, the losing team's score and whether the user won or lost
    if (newA > newB) {
      difference = Math.ceil((newA - newB) / 2);
      newA = baseScore;
      newB = baseScore - difference;
      isWin = 'W';
      setWins(wins + 1);
    } else {
      difference = Math.ceil((newB - newA) / 2);
      newB = baseScore;
      newA = baseScore - difference;
      isWin = 'L';
      setLosses(losses + 1);
    }
    const result = {
      isWin: isWin,
      score: newA + '-' + newB
    };
    results.push(result);
    setUserScore(newA);
    setOpponentScore(newB);
    setMatchupIndex(matchupIndex + 1);
  };
  const saveTeam = () => {
    let history;
    if (localStorage['history']) {
      history = JSON.parse(localStorage.getItem('history'));
    } else {
      history = [];
    }
    const date = new Date().toString().slice(4, 24);
    const newTeamData = {
      name: userLocation.city,
      record: `${wins}-${losses}`,
      roster: {
        pgOne: userSquad.PG[0].name,
        pgTwo: userSquad.PG[1].name,
        sgOne: userSquad.SG[0].name,
        sgTwo: userSquad.SG[1].name,
        sfOne: userSquad.SF[0].name,
        sfTwo: userSquad.SF[1].name,
        pfOne: userSquad.PF[0].name,
        pfTwo: userSquad.PF[1].name,
        cOne: userSquad.C[0].name,
        cTwo: userSquad.C[1].name
      },
      dateAndTime: date,
      teamRating: userScore
    };
    history.push(newTeamData);
    localStorage.setItem('history', JSON.stringify(history));
    setShowModal(true);
  };

  useEffect(() => {
    updateOpponentLocations();
  }, []);
  return (
    <>
      <main className='tournament-main'>
        <header className='tournament-header'>
          {results.length < 9 && (
            <div>
              {matchupIndex === 0 && !currentOpponent && (
                <button
                  className='tournament-btn-next'
                  onClick={getCurrentOpponent}
                >
                  Begin First Game
                </button>
              )}
              {matchupIndex > 0 && userScore !== 0 && (
                <button
                  className='tournament-btn-next'
                  onClick={getCurrentOpponent}
                >
                  Go To Next Game
                </button>
              )}
              {currentOpponent && userScore === 0 && (
                <button
                  className='tournament-btn-start'
                  id='run-game'
                  onClick={runGame}
                >
                  Play Current Matchup
                </button>
              )}
            </div>
          )}
          {matchupIndex > 8 && (
            <button className='tournament-btn-next' onClick={saveTeam}>
              Save and Finish
            </button>
          )}
        </header>
        <section style={{ display: 'flex' }}>
          <ScoreList
            squads={squads}
            opponentLocations={opponentLocations}
            wins={wins}
            losses={losses}
            results={results}
          />
          <MatchupView
            currentOpponent={currentOpponent}
            userLocation={userLocation}
            userSquad={userSquad}
            matchupIndex={matchupIndex}
            userScore={userScore}
            opponentScore={opponentScore}
          />
        </section>
      </main>
      <Modal show={showModal} backdrop='static' keyboard={false}>
        <Modal.Body>
          Your team data has been saved. You can review previous teams you have
          drafted from the History page.
        </Modal.Body>
        <Modal.Footer>
          <button
            className='modal-btn-forwards'
            onClick={() => window.location.reload()}
          >
            Play Again
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Tournament;
