import React from 'react';
import PropTypes from 'prop-types';

import './Groups.css';

const GROUP_TO_COLOR = {
  favorites: 'cyan',
  least_favorites: 'chartreuse',
  nixon: '#FD00FF', // pink. nothing says "nixon" quite like pink
  still_life: 'yellow',
};

const GROUP_TO_NAME = {
  favorites: 'favorites',
  least_favorites: 'least favorites',
  nixon: 'nixon',
  still_life: 'still life',
};

export default function Groups({groups}) {
  return (
    <div>
      {groups.map((group, index) => (
        <span
          key={group}
          className="groups-badge"
          style={{borderColor: GROUP_TO_COLOR[group], color: GROUP_TO_COLOR[group]}}
        >
          {GROUP_TO_NAME[group]}
        </span>
      ))}
    </div>
  );
}

Groups.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.string).isRequired,
}
