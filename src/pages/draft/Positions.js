import React from 'react';

const Positions = ({ positions, filterByPosition }) => {
  return (
    <div>
      {positions.map((position, index) => {
        return (
          <button
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
