import React from 'react';

const Positions = ({ positions, filterPositions }) => {
  return (
    <div>
      {positions.map((position, index) => {
        return (
          <button
            type='button'
            key={index}
            onClick={() => filterPositions(position)}
          >
            {position}
          </button>
        );
      })}
    </div>
  );
};

export default Positions;
