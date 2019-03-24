import React, { Component } from 'react';
import PropTypes from 'prop-types';

import WallInfo from './WallInfo';

import './IntroModal.css';

import WallIntro from './WallIntro';

class IntroModal extends Component {

  static propTypes = {
    onDismiss: PropTypes.func.isRequired, 
  };

  state = {
    showIntroSection: true,
  }

  onMoreInfoClick = () => {
    this.setState({showIntroSection: false});
  };

  render() {
    const {showIntroSection} = this.state;
    const {onDismiss} = this.props;
    return (
      <div className="introModal">
        <div className="introModal-content">
          {showIntroSection
            ? <WallIntro onDismiss={onDismiss} onMoreInfoClick={this.onMoreInfoClick} />
            : <WallInfo onDismiss={onDismiss} />
          }
        </div>
      </div>
    );
  }
}

export default IntroModal;
