import React from 'react';
import PropTypes from 'prop-types';

import './CloseButton.css';

export default function CloseButton({children, className, onClick}) {
    return (
      <button onClick={onClick} className={`closeButton ${className}`}>
        {children}
      </button>
    );
}

CloseButton.defaultProps = {
  className: undefined,
  children: 'x',
};

CloseButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}
