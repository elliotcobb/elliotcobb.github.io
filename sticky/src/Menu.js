import React, { Component } from 'react';

import CloseButton from './CloseButton';
import './Menu.css';

class Menu extends Component {
  state = {
    showSubMenu: false,
  };

  handleToggleMenu = () => {
    this.setState({showSubMenu: !this.state.showSubMenu});
  }

  render() {
    const array = [];
    for (var i = 0; i < 300; i++) {
      array.push(i);
    }

    const {showSubMenu} = this.state;

    return showSubMenu
      ? (
        <div className={`menu ${showSubMenu && 'menu--on'}`}>
          <div className="menu-content">
            <CloseButton onClick={this.handleToggleMenu} />
            <div>
              <button>Stories</button>
              <button>Favorites</button>
              <button>Least favorites</button>
            </div>
            <div>
              <button>mediums</button>
              <button>subject</button>
            </div>
          </div>
        </div>
      )
      : (
        <div className="menu-wrapper">
          <button className="menu-button" onClick={this.handleToggleMenu} />
        </div>
      );
  }
}

export default Menu;
