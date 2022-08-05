import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RiTimerLine } from 'react-icons/ri';
import { BsPeopleFill, BsArrowRightCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { startFetchingRecipe } from '../Redux/recipes/recipes';
import '../styles/RecipeThumbnail.css';

const RecipeThumbnail = (props) => {
  const { recipe } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showRecipeDetails = (e) => {
    e.preventDefault();
    dispatch(startFetchingRecipe());
    navigate(`/recipe/${recipe.id}/${recipe.slug}`);
  };

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
          <button type="button" onClick={(e) => showRecipeDetails(e)}>
            <BsArrowRightCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

RecipeThumbnail.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    thumbnail_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    prep_time_minutes: PropTypes.number.isRequired,
    num_servings: PropTypes.number.isRequired,
  }).isRequired,
};

export default RecipeThumbnail;
