import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CloseButton from './CloseButton';

const INFO = [
  `Hello! I'm Elliot. One day in February 2018 I started doodling on a sticky note. I thought "What if I did one every day for a whole year?"`,
  'I put the drawings up on my wall, and in February 2019 I passed one year! This website shows my wall and one year of art.',
  'The doodles go chronologically from top to bottom.',
  "The wall has a few emergent properties that I didn't anticipate: It's a diary of the last year where I can remember one event or train of thought for each day. It's a guest book of my friends' sticky note art. It's a lab for experimenting and thinking outside the box. And it tracks my skill as an artist over time.",
  'Thanks for visiting. I hope you enjoy!',
];

class WallInfo extends Component {

  static propTypes = {
    onDismiss: PropTypes.func.isRequired, 
  };

  render() {
    const {onDismiss} = this.props;
    return (
      <div className="wallInfo">
        <CloseButton onClick={onDismiss} />
        <h3>What's this?</h3>
        {INFO.map(message => (
          <p key={message}>{message}</p>
        ))}
        <button onClick={onDismiss}>
          Take a gander
        </button>
      </div>
    );
  }
}

export default WallInfo;
