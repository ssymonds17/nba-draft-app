import React, { useState, useEffect } from 'react';
import teams from '../../data/teams';
import { useGlobalContext } from '../../context';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
        <div className='nav-container'>
          <Link to='/'>
            <button className='custom-btn nav-btn'>Home</button>
          </Link>
          <Link to='/history'>
            <button className='custom-btn nav-btn'>History</button>
          </Link>
        </div>
        <section className='home-main'>
          <h1>All Time NBA Fantasy Draft</h1>
          <p>
            From a selection of current and classic players, draft a star
            studded roster to compete against 9 competitors. To begin, merely
            select a location for your team.
          </p>
        </section>
        <section className='team-selection'>
          <header className='team-selection-header'>
            {!userLocation && <h3>select a team location</h3>}
            {userLocation && (
              <button
                className='location-choose-btn'
                onClick={() =>
                  handleLocationSelection(data, userLocation.conference)
                }
              >
                Choose {userLocation.city}?
              </button>
            )}
          </header>
          <div className='location-button-container'>
            {data.map((location) => {
              const { city, id } = location;
              return (
                <button
                  className='location-btn custom-btn'
                  key={id}
                  onClick={() => chooseLocation(location)}
                >
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
          <button
            className='modal-btn modal-btn-forwards'
            onClick={handleHomeClick}
          >
            Go To Draft
          </button>
          <button
            className='modal-btn modal-btn-change'
            onClick={() => chooseOpponents(data, userLocation.conference)}
          >
            Change Draft Order
          </button>
          <button className='modal-btn modal-btn-back' onClick={handleClose}>
            Choose Different Team
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Home;
