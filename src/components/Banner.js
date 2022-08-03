import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { RiTimerLine } from 'react-icons/ri';
import { BsPeopleFill, BsArrowRightCircle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { startFetchingRecipe } from '../Redux/recipes/recipes';
import '../styles/Banner.css';

const Banner = (props) => {
  const { featuresRecipe } = props;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showRecipeDetails = (e) => {
    e.preventDefault();
    dispatch(startFetchingRecipe());
    navigate(`/recipe/${featuresRecipe.id}/${featuresRecipe.slug}`);
  };

  return (
    <div className="banner">
      <div className="banner-image">
        <img src={featuresRecipe.thumbnail_url} alt={featuresRecipe.name} />
      </div>
      <div className="banner-infos">
        <div className="dish-name">
          <span>{featuresRecipe.name}</span>
        </div>
        <div className="dish-infos">
          <div>
            <span>
              {' '}
              <RiTimerLine />
              {' '}
              {featuresRecipe.prep_time_minutes}
            </span>
            <br />
            <span>
              {' '}
              <BsPeopleFill />
              {' '}
              {featuresRecipe.num_servings}
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

Banner.propTypes = {
  featuresRecipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    thumbnail_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    prep_time_minutes: PropTypes.number.isRequired,
    num_servings: PropTypes.number.isRequired,
  }).isRequired,
};

export default Banner;
