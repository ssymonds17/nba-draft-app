import React from 'react';
import { useGlobalContext } from '../../context';

const SingleTeamPlayers = () => {
  // Need to refactor so that this component can be reused for each of the opponent teams as well.
  const { userLocation, userSquad } = useGlobalContext();
  const { PG, SG, SF, PF, C } = userSquad;
  return (
    <section>
      <header>
        <h2>{userLocation && userLocation.city} squad</h2>
      </header>
      <article>
        <p>PG: {PG[0] && PG[0].name}</p>
        <p>SG: {SG[0] && SG[0].name}</p>
        <p>SF: {SF[0] && SF[0].name}</p>
        <p>PF: {PF[0] && PF[0].name}</p>
        <p>C: {C[0] && C[0].name}</p>
        <p>reserve: {PG[1] && PG[1].name}</p>
        <p>reserve: {SG[1] && SG[1].name}</p>
        <p>reserve: {SF[1] && SF[1].name}</p>
        <p>reserve: {PF[1] && PF[1].name}</p>
        <p>reserve: {C[1] && C[1].name}</p>
      </article>
    </section>
  );
};

export default SingleTeamPlayers;
