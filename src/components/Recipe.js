/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RiTimerLine } from 'react-icons/ri';
import { BsPeopleFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { getRecipe } from '../Redux/recipes/recipes';
import Loader from './Loader';
import '../styles/Recipe.css';

const Recipe = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const recipesData = useSelector((state) => state.recipes);
  const { loader, recipe } = recipesData;

  useEffect(() => {
    dispatch(getRecipe(id));
  }, []);

  return (
    <div>
      { loader && <Loader /> }
      { !loader && (
        <div className="recipe-details">
          <div className="recipe-banner">
            { recipe.original_video_url && (
            <video src={recipe.original_video_url} autoPlay="true" controls="controls" />
            )}
            { !recipe.video_url && (
            <img src={recipe.thumbnail_url} alt={recipe.name} />
            )}
          </div>
          <div className="recipe-infos">
            <h1>{recipe.name}</h1>
            <div className="metrics">
              <span>
                {' '}
                <RiTimerLine />
                {' '}
                {recipe.prep_time_minutes}
              </span>
              <span>
                {' '}
                <BsPeopleFill />
                {' '}
                {recipe.num_servings}
                People
              </span>
              { recipe.user_ratings && (
              <span>
                {' '}
                <AiFillStar />
                {' '}
                {recipe.user_ratings.score}
              </span>
              )}
            </div>
            <div className="tags">
              {
              recipe.tags.map((tag) => (
                <span key={tag.id}>{tag.display_name}</span>
              ))
              }
            </div>
          </div>
          <div className="recipe-description">
            { recipe.description }
          </div>
          { recipe.instructions && (
          <div className="recipe-steps">
            <h3>Instructions</h3>
            <ul>
              {
                recipe.instructions.map((instruction) => (
                  <li key={instruction.id}>
                    {instruction.display_text}
                  </li>
                ))
                }
            </ul>
          </div>
          )}
        </div>
      ) }
    </div>
  );
};

export default Recipe;
