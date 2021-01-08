import React, { useState } from 'react';
import { useGlobalContext } from '../../context';
import { Modal } from 'react-bootstrap';

const ListOfOpponents = () => {
  const { competingLocations, userLocation, squads } = useGlobalContext();
  const [modalShow, setModalShow] = useState(false);
  const [currentSquad, setCurrentSquad] = useState(null);

  const opponentLocations = [...competingLocations].filter(
    (location) => location.city !== userLocation.city
  );

  const selectOpponentSquad = (location) => {
    let newSquad = [];
    squads.forEach((squad) => {
      if (squad[0].city === location) {
        newSquad.push(squad[0]);
      }
    });
    setCurrentSquad(newSquad[0]);
  };

  const handleClick = (city) => {
    selectOpponentSquad(city);
    setModalShow(true);
  };

  if (!opponentLocations.length) {
    return (
      <>
        <h2>No Opponents</h2>
      </>
    );
  }
  return (
    <>
      <section className='draft-opponents-container'>
        <header>
          <h3>Opponent Rosters</h3>
        </header>
        <article>
          <ul>
            {opponentLocations.map((location) => {
              const { city, team_number } = location;
              return (
                <li key={team_number} onClick={() => handleClick(city)}>
                  {city}
                </li>
              );
            })}
          </ul>
        </article>
      </section>
      <OpponentSquadModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        currentSquad={currentSquad}
      />
    </>
  );
};

const OpponentSquadModal = (props) => {
  const { currentSquad, ...rest } = props;
  if (currentSquad === null) return <Modal {...rest}>Null</Modal>;

  return (
    <Modal
      {...rest}
      backdrop='static'
      size='lg'
      aria-labelledby='opponent-squad-modal-center'
      centered
    >
      <Modal.Header>
        <Modal.Title id='opponent-squad-modal-center'>
          {props.currentSquad && props.currentSquad.city}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='opponent-squad-modal'>
        <section style={{ display: 'flex' }}>
          <article style={{ display: 'flex' }}>
            <div>
              <ul>
                <li>PG:</li>
                <li>SG:</li>
                <li>SF:</li>
                <li>PF:</li>
                <li>C:</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  {props.currentSquad.PG.length > 0
                    ? props.currentSquad.PG[0].name
                    : '________________________________'}
                </li>
                <li>
                  {props.currentSquad.SG.length > 0
                    ? props.currentSquad.SG[0].name
                    : '________________________________'}
                </li>
                <li>
                  {props.currentSquad.SF.length > 0
                    ? props.currentSquad.SF[0].name
                    : '________________________________'}
                </li>
                <li>
                  {props.currentSquad.PF.length > 0
                    ? props.currentSquad.PF[0].name
                    : '________________________________'}
                </li>
                <li>
                  {props.currentSquad.C.length > 0
                    ? props.currentSquad.C[0].name
                    : '________________________________'}
                </li>
              </ul>
            </div>
          </article>
          <article style={{ display: 'flex' }}>
            <div>
              <ul>
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
                  {props.currentSquad.PG.length > 1
                    ? props.currentSquad.PG[1].name
                    : '________________________________'}
                </li>
                <li>
                  {props.currentSquad.SG.length > 1
                    ? props.currentSquad.SG[1].name
                    : '________________________________'}
                </li>
                <li>
                  {props.currentSquad.SF.length > 1
                    ? props.currentSquad.SF[1].name
                    : '________________________________'}
                </li>
                <li>
                  {props.currentSquad.PF.length > 1
                    ? props.currentSquad.PF[1].name
                    : '________________________________'}
                </li>
                <li>
                  {props.currentSquad.C.length > 1
                    ? props.currentSquad.C[1].name
                    : '________________________________'}
                </li>
              </ul>
            </div>
          </article>
        </section>
      </Modal.Body>
      <Modal.Footer>
        <button className='modal-btn-back' onClick={props.onHide}>
          Back
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ListOfOpponents;
