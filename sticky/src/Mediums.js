import React from 'react';
import PropTypes from 'prop-types';

export default function Mediums({mediums}) {
  return (
    <div>
      {mediums.map((medium, index) => (
        <span key={medium}>{medium}{index < mediums.length -1 && ', '}</span>
      ))}
    </div>
  );
}

Mediums.propTypes = {
  mediums: PropTypes.arrayOf(PropTypes.string).isRequired,
}
