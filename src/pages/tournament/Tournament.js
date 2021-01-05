import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context';
import ScoreList from './ScoreList';
import MatchupView from './MatchupView';

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
    // setUserRating(ratings.reduce((a, b) => a + b));
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
    // setOpponentRating(ratings.reduce((a, b) => a + b));
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

  useEffect(() => {
    updateOpponentLocations();
  }, []);
  return (
    <main>
      <h2>Tournament</h2>
      {results.length < 9 && (
        <div>
          {matchupIndex === 0 && !currentOpponent && (
            <button onClick={getCurrentOpponent}>Go To First Game</button>
          )}
          {matchupIndex > 0 && userScore !== 0 && (
            <button onClick={getCurrentOpponent}>Go To Next Game</button>
          )}
          {currentOpponent && userScore === 0 && (
            <button id='run-game' onClick={runGame}>
              Play Current Matchup
            </button>
          )}
        </div>
      )}
      <section style={{ display: 'flex' }}>
        <ScoreList
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
  );
};

export default Tournament;
