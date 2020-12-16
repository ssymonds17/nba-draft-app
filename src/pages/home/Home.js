import React from 'react';
import teams from '../../data/teams';
import { useGlobalContext } from '../../context';

const Home = () => {
  const { userLocation, chooseLocation, chooseOpponents } = useGlobalContext();
  const data = teams;

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
        <header>
          {!userLocation && <h2>select a team location</h2>}
          {userLocation && (
            <button
              onClick={() => chooseOpponents(data, userLocation.conference)}
            >
              select {userLocation.city}?
            </button>
          )}
        </header>
        <div>
          {data.map((location) => {
            const { city, id } = location;
            return (
              <button key={id} onClick={() => chooseLocation(location)}>
                {city}
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Home;
