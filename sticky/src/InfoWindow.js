import React from 'react';
import PropTypes from 'prop-types';

import './InfoWindow.css';

export default function InfoWindow({children}) {
  return (
    <div className="infoWindow">{children}</div>
  );
}

InfoWindow.propTypes = {
  children: PropTypes.node.isRequired,
};
