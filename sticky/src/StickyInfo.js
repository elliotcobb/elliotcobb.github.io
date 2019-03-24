import React from 'react';
import PropTypes from 'prop-types';

import Groups from './Groups';
import Mediums from './Mediums';

import './StickyInfo.css';

export default function StickyInfo({
  groups,
  isFavorite,
  leastFavoritesExplanation,
  mediums,
  onFavoriteSelected,
  story,
}) {
  return (
    <div className="stickyInfo">
      <Mediums mediums={mediums} />
      <Groups groups={groups} />
      {leastFavoritesExplanation && (<p>It's a least favorite because: {leastFavoritesExplanation}</p>)}
      <p>{story}</p>
      <button
        className="wallView-favoriteButton"
        onClick={onFavoriteSelected}
      >
        {isFavorite ? 'favorited!' : 'Mark as your favorite'}
      </button>
    </div>
  );
}

StickyInfo.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.string).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  leastFavoritesExplanation: PropTypes.string.isRequired,
  mediums: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFavoriteSelected: PropTypes.func.isRequired,
  story: PropTypes.string.isRequired,
};
