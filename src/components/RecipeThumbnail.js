import React from 'react';
import PropTypes from 'prop-types';
import { RiTimerLine } from 'react-icons/ri';
import { BsPeopleFill } from 'react-icons/bs';
import '../styles/RecipeThumbnail.css';

const RecipeThumbnail = (props) => {
  const { recipe } = props;

  return (
    <div className="recipe-thumbnail">
      <div className="thumbnail-image">
        <img src={recipe.thumbnail_url} alt={recipe.name} />
      </div>
      <div className="thumbnail-infos">
        <div className="thumbnail-name">
          <span>{recipe.name}</span>
        </div>
        <div className="thumbnail-inner-infos">
          <div>
            <span>
              {' '}
              <RiTimerLine />
              {' '}
              {recipe.prep_time_minutes}
            </span>
            <br />
            <span>
              {' '}
              <BsPeopleFill />
              {' '}
              {recipe.num_servings}
              People
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

RecipeThumbnail.propTypes = {
  recipe: PropTypes.shape({
    thumbnail_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    prep_time_minutes: PropTypes.number.isRequired,
    num_servings: PropTypes.number.isRequired,
  }).isRequired,
};

export default RecipeThumbnail;
