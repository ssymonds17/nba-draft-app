import React from 'react';
import teams from '../../data/teams.json';
import { useGlobalContext } from '../../context';

const Home = () => {
  const { userLocation, chooseLocation } = useGlobalContext();

  return (
    <main>
      <section>
        <h1>ultimate nba draft</h1>
        <p>
          Pick a team and then draft that team against 9 others. After the teams
          are selected, your team will run a gauntlet against each of your
          opponents, and the ultimate aim is to go undefeated (9-0).
        </p>
      </section>
      <section>
        <h2>select a team location</h2>
        <h4>selected location: {userLocation}</h4>
        {teams.map((location) => {
          const { city, id } = location;
          return (
            <button key={id} onClick={() => chooseLocation(city)}>
              {city}
            </button>
          );
        })}
      </section>
    </main>
  );
};

export default Home;
