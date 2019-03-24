import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {isMobile} from './helpers';
import InfoWindow from './InfoWindow';

import './Sticky.css';

const INFO_WINDOW_WIDTH = 340;
const STICKY_WIDTH = 110;

export class Sticky extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isStickySelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onMouseLeave: PropTypes.func.isRequired,
    xCoord: PropTypes.number.isRequired,
    yCoord: PropTypes.number.isRequired,
  }

  state = {
    infoWindowStyle: {},
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isStickySelected === this.props.isStickySelected) {
      return;
    }

    const centerOfStickyXAxis = this.props.xCoord + STICKY_WIDTH/2; 
    const windowWidth = window.innerWidth;
    const rightWindowBorderXCoord = window.pageXOffset + windowWidth;
    const distanceToRightWindowBorder = rightWindowBorderXCoord - centerOfStickyXAxis;
    const isOnRightHalfOfScreen = distanceToRightWindowBorder < windowWidth/2;

    const infoWindowXCoord = isOnRightHalfOfScreen
      ? -INFO_WINDOW_WIDTH
      : STICKY_WIDTH;
    this.setState({
      infoWindowStyle: {
        left: `${infoWindowXCoord}px`,
      }
    });
  }

  render() {
    const {
      children,
      isStickySelected,
      onClick,
      onMouseLeave,
      xCoord,
      yCoord,
    } = this.props;
    const {infoWindowStyle} = this.state;
    return (
      <>
        <div
          className={`sticky ${isStickySelected ? 'sticky--infoWindowVisible' : ''}`}
          onClick={onClick}
          onMouseLeave={onMouseLeave}
          style={{left: xCoord, top: yCoord}}
        >
          {!isMobile() &&
            <div className="sticky-infoWindow" style={infoWindowStyle}>
              <InfoWindow>{children}</InfoWindow>
            </div>
          }
        </div>
      </>
    );
  }
}

export default Sticky;
