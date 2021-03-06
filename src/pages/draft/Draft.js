import React, { useState, useEffect } from 'react';
import DraftBoard from './DraftBoard';
import DraftOrder from './DraftOrder';
import ListOfOpponents from './ListOfOpponents';
import SingleTeamPlayers from './SingleTeamPlayers';
import { useGlobalContext } from '../../context';
import { Modal } from 'react-bootstrap';

const Draft = ({ handleDraftClick }) => {
  const {
    userLocation,
    availablePlayers,
    handlePlayerSelection,
    lastPickedPlayer,
    lastTeamToPick,
    currentPick,
    updateIsUser,
    handleUserSelection,
    isUser,
    nextTeam,
    getNextTeam,
    doubleUserForceAction
  } = useGlobalContext();
  const [showStartModal, setShowStartModal] = useState(true);
  const [showOpponentSelectionModal, setShowOpponentSelectionModal] = useState(
    false
  );
  const [showEndDraftModal, setShowEndDraftModal] = useState(false);

  // Functions to check if the user has the number 1 pick
  const allowUserPickStart = () => {
    if (isUser === true) {
      setShowOpponentSelectionModal(false);
    } else {
      setShowOpponentSelectionModal(true);
    }
  };
  const allowOpponentPickStart = () => {
    if (isUser === true) {
      return;
    } else {
      handlePlayerSelection();
    }
  };
  // Functions to handle whether to allow user to make a pick or whether the computer should make a selection
  const allowUserPick = () => {
    if (nextTeam === userLocation.city) {
      setShowOpponentSelectionModal(false);
    } else {
      setShowOpponentSelectionModal(true);
    }
  };
  const allowOpponentPick = () => {
    if (nextTeam === userLocation.city) {
      return;
    } else {
      handlePlayerSelection();
    }
  };
  const handleDraftStart = () => {
    setShowStartModal(false);
    allowUserPickStart();
    allowOpponentPickStart();
    getNextTeam();
  };
  const handleNextPick = () => {
    if (currentPick === 101) {
      handleDraftEnd();
    } else {
      allowOpponentPick();
      allowUserPick();
      getNextTeam();
    }
  };
  const handleUserPick = (player) => {
    handleUserSelection(player);
    const checkUser = doubleUserForceAction();
    allowUserPick(checkUser);
    if (availablePlayers.length === 1) {
      handleDraftEnd();
    }
  };
  const handleDraftEnd = () => {
    setShowOpponentSelectionModal(false);
    setShowEndDraftModal(true);
  };

  useEffect(() => {
    updateIsUser();
  }, []);
  return (
    <main className='draft-main'>
      <DraftBoard handleUserPick={handleUserPick} />
      <div className='draft-rosters-container'>
        <SingleTeamPlayers team={userLocation && userLocation.city} />
        <ListOfOpponents />
      </div>
      <DraftOrder />
      <Modal show={showStartModal} backdrop='static' keyboard={false}>
        <Modal.Body>
          <p>
            The draft consists of 100 players divided. There are 20 players from
            each position: Point Guard (PG), Shooting Guard (SG), Small Forward
            (SF), Power Foward (PF) and Center (C).
          </p>
          <p>
            You are limited to selecting 2 players from each position and will
            finish with 10 players total on your roster.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className='modal-btn modal-btn-forwards'
            onClick={handleDraftStart}
          >
            Begin Draft
          </button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={showOpponentSelectionModal}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header>Previous Pick</Modal.Header>
        <Modal.Body>
          <p>
            {lastTeamToPick && lastTeamToPick} selected{' '}
            {lastPickedPlayer && lastPickedPlayer.name}
          </p>
        </Modal.Body>
        <Modal.Footer>
          {currentPick <= 100 && (
            <p>
              Next Pick: {nextTeam} ({currentPick})
            </p>
          )}
          <button className='btn-primary' onClick={handleNextPick}>
            {currentPick <= 100 ? 'Next Pick' : 'Finish'}
          </button>
        </Modal.Footer>
      </Modal>
      <Modal show={showEndDraftModal} backdrop='static' keyboard={false}>
        <Modal.Header>
          <Modal.Title>Draft Completed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The draft has finished. Please proceed to the tournament round where
          your selected team will be matched up against each opponent.
        </Modal.Body>
        <Modal.Footer>
          <button className='btn-primary' onClick={handleDraftClick}>
            Go To Tournament
          </button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};

export default Draft;
