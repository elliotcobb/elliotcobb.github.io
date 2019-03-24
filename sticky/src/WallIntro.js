import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './WallIntro.css';

class WallIntro extends Component {

  static propTypes = {
    onDismiss: PropTypes.func.isRequired, 
    onMoreInfoClick: PropTypes.func.isRequired, 
  };

  render() {
    const {onDismiss, onMoreInfoClick} = this.props;
    return (
      <div className="wallIntro">
        <h2>One year of sticky notes</h2>
        <button className="wallIntro-button" onClick={onDismiss}>
          Let's see em
        </button>
        <button className="wallIntro-button" onClick={onMoreInfoClick}>
          About the project
        </button>
      </div>
    );
  }
}

export default WallIntro;
