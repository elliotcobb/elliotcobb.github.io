import React from 'react';
import PropTypes from 'prop-types';

import InfoWindow from './InfoWindow';

import './BottomInfoWindow.css';

export default function BottomInfoWindow({children}) {
  return (
    <div className="bottomInfoWindow">
      <div className="bottomInfoWindow-wrapper">
        <InfoWindow>
          {children}        
        </InfoWindow>
      </div>
    </div>
  );
}

BottomInfoWindow.propTypes = {
  children: PropTypes.node.isRequired,
};
