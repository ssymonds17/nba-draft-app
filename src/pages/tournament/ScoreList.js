import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const ScoreList = ({ opponentLocations, wins, losses, results, squads }) => {
  const [modalShow, setModalShow] = useState(false);
  const [currentSquad, setCurrentSquad] = useState(null);

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
  return (
    <>
      <section>
        <article>
          <h4>Score List</h4>
          <h5>
            Record: {wins} - {losses}
          </h5>
          <table>
            <thead>
              <tr>
                <th>Opponent</th>
                <th>Result</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {opponentLocations.map((location, index) => {
                const { city } = location;
                return (
                  <tr key={index}>
                    <td onClick={() => handleClick(city)}>{city}</td>
                    <td>{results[index] ? results[index].isWin : ''}</td>
                    <td>{results[index] ? results[index].score : ''}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
      <Modal.Body>
        <p>
          PG:{' '}
          {props.currentSquad.PG.length > 0
            ? props.currentSquad.PG[0].name
            : ''}
        </p>
        <p>
          SG:{' '}
          {props.currentSquad.SG.length > 0
            ? props.currentSquad.SG[0].name
            : ''}
        </p>
        <p>
          SF:{' '}
          {props.currentSquad.SF.length > 0
            ? props.currentSquad.SF[0].name
            : ''}
        </p>
        <p>
          PF:{' '}
          {props.currentSquad.PF.length > 0
            ? props.currentSquad.PF[0].name
            : ''}
        </p>
        <p>
          C:{' '}
          {props.currentSquad.C.length > 0 ? props.currentSquad.C[0].name : ''}
        </p>
        <p>
          Reserve:{' '}
          {props.currentSquad.PG.length > 1
            ? props.currentSquad.PG[1].name
            : ''}
        </p>
        <p>
          Reserve:{' '}
          {props.currentSquad.SG.length > 1
            ? props.currentSquad.SG[1].name
            : ''}
        </p>
        <p>
          Reserve:{' '}
          {props.currentSquad.SF.length > 1
            ? props.currentSquad.SF[1].name
            : ''}
        </p>
        <p>
          Reserve:{' '}
          {props.currentSquad.PF.length > 1
            ? props.currentSquad.PF[1].name
            : ''}
        </p>
        <p>
          Reserve:{' '}
          {props.currentSquad.C.length > 1 ? props.currentSquad.C[1].name : ''}
        </p>
      </Modal.Body>
      <Modal.Footer onClick={props.onHide}>Back</Modal.Footer>
    </Modal>
  );
};

export default ScoreList;
