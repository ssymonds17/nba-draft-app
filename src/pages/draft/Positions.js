import React from 'react';

const Positions = ({ positions, filterByPosition }) => {
  return (
    <div className='position-btn-container'>
      {positions.map((position, index) => {
        return (
          <button
            className='position-btn'
            type='button'
            key={index}
            onClick={() => filterByPosition(position)}
          >
            {position}
          </button>
        );
      })}
    </div>
  );
};

export default Positions;
