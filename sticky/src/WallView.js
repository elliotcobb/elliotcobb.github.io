import React, { Component } from 'react';

import WALL_DATA from './WallData.json';
import {isMobile} from './helpers';

import BottomInfoWindow from './BottomInfoWindow';
import IntroModal from './IntroModal';
import Menu from './Menu';
import Sticky from './Sticky';
import StickyInfo from './StickyInfo';

import './WallView.css';

class WallView extends Component {
  state = {
    isIntroModalDismissed: false,
    openSticky: undefined,
    userFavorite: undefined,
  };

  componentDidMount() {
    const windowWidth = window.innerWidth;

    if (isMobile()) {
      // scroll to center of page on mobile
      window.scrollTo(windowWidth * 2, windowWidth * 2);      
    }
  }

  handleIntroModalDismiss = () => {
    this.setState({isIntroModalDismissed: true});
  }

  onFavoriteSelected = (id) => {
    if (this.state.userFavorite === id) {
      this.setState({userFavorite: undefined});
      return;
    }

    this.setState({userFavorite: id});
    // make favoriteSelected event call
  }

  onMouseLeave = () => {
    this.setState({openSticky: undefined});
  }

  onStickyClick = (id) => {
    this.setState({openSticky: id});
  }

  render() {
    const {isIntroModalDismissed, openSticky, userFavorite} = this.state;
    return (
      <div className="wallView">
        <img className="wallView-image" alt="sticky note wall" src="/wall.jpg" />
        {WALL_DATA.map(({id, xCoord, yCoord, ...stickyInfo}) => (
          <>
            <Sticky
              key={id}
              isStickySelected={openSticky === id}
              onClick={() => this.onStickyClick(id)}
              onMouseLeave={this.onMouseLeave}
              xCoord={xCoord}
              yCoord={yCoord}
            >
              {!isMobile() && 
                <StickyInfo
                  {...stickyInfo}
                  isFavorite={userFavorite === id}
                  onFavoriteSelected={() => this.onFavoriteSelected(id)}
                />
              }
            </Sticky>
          </>
        ))}
        {openSticky && isMobile() && (
          <BottomInfoWindow>
            <StickyInfo
              {...WALL_DATA[openSticky]}
              isFavorite={userFavorite === openSticky}
              onFavoriteSelected={() => this.onFavoriteSelected(openSticky)}
            />
          </BottomInfoWindow>
        )}
        {isIntroModalDismissed && <Menu />}
        {!isIntroModalDismissed && <IntroModal onDismiss={this.handleIntroModalDismiss} />}
      </div>
    );
  }
}

export default WallView;
