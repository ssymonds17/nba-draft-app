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
    return newSquad[0];
  };

  useEffect(() => {
    setCurrentSquad(findCorrectSquad());
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
    <section>
      <header>
        <h2>{team && location} squad</h2>
      </header>
      <article>
        <p>PG: {currentSquad.PG.length > 0 ? currentSquad.PG[0].name : ''}</p>
        <p>SG: {currentSquad.SG.length > 0 ? currentSquad.SG[0].name : ''}</p>
        <p>SF: {currentSquad.SF.length > 0 ? currentSquad.SF[0].name : ''}</p>
        <p>PF: {currentSquad.PF.length > 0 ? currentSquad.PF[0].name : ''}</p>
        <p>C: {currentSquad.C.length > 0 ? currentSquad.C[0].name : ''}</p>
        <p>
          Reserve: {currentSquad.PG.length > 1 ? currentSquad.PG[1].name : ''}
        </p>
        <p>
          Reserve: {currentSquad.SG.length > 1 ? currentSquad.SG[1].name : ''}
        </p>
        <p>
          Reserve: {currentSquad.SF.length > 1 ? currentSquad.SF[1].name : ''}
        </p>
        <p>
          Reserve: {currentSquad.PF.length > 1 ? currentSquad.PF[1].name : ''}
        </p>
        <p>: {currentSquad.C.length > 1 ? currentSquad.C[1].name : ''}</p>
      </article>
    </section>
  );
};

export default SingleTeamPlayers;
