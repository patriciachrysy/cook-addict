import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getRecipes } from '../Redux/recipes/recipes';
import { getByCategory } from '../Redux/feed/feed';
import Section from './Section';
import Loader from './Loader';

const Recipes = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const feedData = useSelector((state) => state.feed);
  console.log(feedData);
  const { feed } = feedData;
  console.log(feed);
  const recipesData = useSelector((state) => state.recipes);
  const { loader, recipes } = recipesData;
  const recipesObj = {
    name: 'All Recipes',
    category: 'all',
    min_items: recipes.length,
    items: recipes,
  };

  useEffect(() => {
    if (category === 'all') {
      dispatch(getRecipes());
    } else {
      dispatch(getByCategory(category));
    }
  }, []);

  return (
    <div className="container">
      { category !== 'all' && feed.length > 0 && (
        <Section
          key={feed[0].category}
          max={feed[0].items.length}
          feed={feed[0]}
        />
      )}
      { category === 'all' && (
        <div>
          { loader && <Loader /> }
          { !loader && (
            <Section
              key="all"
              max={recipes.length}
              feed={recipesObj}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Recipes;
