import React, { useState, useEffect } from 'react';
import teams from '../../data/teams';
import { useGlobalContext } from '../../context';
import { Modal } from 'react-bootstrap';

const Home = ({ handleHomeClick }) => {
  const {
    userLocation,
    chooseLocation,
    chooseOpponents,
    competingLocations
  } = useGlobalContext();
  const [showModal, setShowModal] = useState(false);
  const [userDraftPosition, setUserDraftPosition] = useState('');
  const data = teams;

  const handleLocationSelection = (data, conference) => {
    chooseOpponents(data, conference);
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);
  const getUserDraftPosition = () => {
    const newLocation = [...competingLocations].filter(
      (location) => location.city === userLocation.city
    );
    const draftPosition = userLocation ? newLocation[0].team_number : 1;
    if (draftPosition === 1) {
      setUserDraftPosition('1st');
    } else if (draftPosition === 2) {
      setUserDraftPosition('2nd');
    } else if (draftPosition === 3) {
      setUserDraftPosition('3rd');
    } else {
      setUserDraftPosition(`${draftPosition}th`);
    }
  };

  useEffect(() => {
    getUserDraftPosition();
  }, [competingLocations]);

  return (
    <>
      <main>
        <section>
          <h1>ultimate nba draft</h1>
          <p>
            Pick a team and then draft that team against 9 others. After the
            teams are selected, your team will run a gauntlet against each of
            your opponents, and the ultimate aim is to go undefeated (9-0).
          </p>
        </section>
        <section>
          <header>
            {!userLocation && <h2>select a team location</h2>}
            {userLocation && (
              <button
                onClick={() =>
                  handleLocationSelection(data, userLocation.conference)
                }
              >
                Choose {userLocation.city}?
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
      <Modal show={showModal} backdrop='static' keyboard={false} centered>
        <Modal.Header>
          <Modal.Title>
            You have chosen {userLocation && userLocation.city}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {userLocation && userLocation.city} has the {userDraftPosition} pick.
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleHomeClick}>Go To Draft</button>
          <button
            onClick={() => chooseOpponents(data, userLocation.conference)}
          >
            Change Draft Order
          </button>
          <button onClick={handleClose}>Choose Different Team</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
