import React, { useEffect, useState } from 'react';
import { useGlobalContext } from '../../context';

const SingleTeamPlayers = (team) => {
  const { squads } = useGlobalContext();
  const [currentSquad, setCurrentSquad] = useState(null);
  const location = team.team;
  const findCorrectSquad = () => {
    let newSquad = [];
    squads.forEach((squad) => {
      if (squad[0].city === location) {
        newSquad.push(squad[0]);
      }
    });
    setCurrentSquad(newSquad[0]);
  };

  useEffect(() => {
    findCorrectSquad();
  }, [team]);

  if (!currentSquad)
    return (
      <>
        <section>
          <h3>No Players Selected Yet</h3>
        </section>
      </>
    );

  return (
    <section className='user-squad-container'>
      <header>
        <h3>{team && location} Roster</h3>
      </header>
      <article style={{ display: 'flex' }}>
        <div>
          <ul>
            <li>PG:</li>
            <li>SG:</li>
            <li>SF:</li>
            <li>PF:</li>
            <li>C:</li>
            <li>Reserve:</li>
            <li>Reserve:</li>
            <li>Reserve:</li>
            <li>Reserve:</li>
            <li>Reserve:</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              {currentSquad.PG.length > 0
                ? currentSquad.PG[0].name
                : '________________________________'}
            </li>
            <li>
              {currentSquad.SG.length > 0
                ? currentSquad.SG[0].name
                : '________________________________'}
            </li>
            <li>
              {currentSquad.SF.length > 0
                ? currentSquad.SF[0].name
                : '________________________________'}
            </li>
            <li>
              {currentSquad.PF.length > 0
                ? currentSquad.PF[0].name
                : '________________________________'}
            </li>
            <li>
              {currentSquad.C.length > 0
                ? currentSquad.C[0].name
                : '________________________________'}
            </li>
            <li>
              {currentSquad.PG.length > 1
                ? currentSquad.PG[1].name
                : '________________________________'}
            </li>
            <li>
              {currentSquad.SG.length > 1
                ? currentSquad.SG[1].name
                : '________________________________'}
            </li>
            <li>
              {currentSquad.SF.length > 1
                ? currentSquad.SF[1].name
                : '________________________________'}
            </li>
            <li>
              {currentSquad.PF.length > 1
                ? currentSquad.PF[1].name
                : '________________________________'}
            </li>
            <li>
              {currentSquad.C.length > 1
                ? currentSquad.C[1].name
                : '________________________________'}
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default SingleTeamPlayers;
