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
  const { feed } = feedData;
  const recipesData = useSelector((state) => state.recipes);
  const { loader, recipes } = recipesData;
  const recipesObj = {
    name: 'All Recipes',
    category: 'all',
    min_items: recipes.length,
    items: recipes,
  };
  const resultsObj = {
    name: 'Search results',
    category: 'search_results',
    min_items: recipes.length,
    items: recipes,
  };

  useEffect(() => {
    if (category === 'all') {
      dispatch(getRecipes());
    } else if (category !== 'search_results') {
      dispatch(getByCategory(category));
    }
  }, []);

  return (
    <div className="container">
      { category !== 'all' && category !== 'search_results' && feed.length > 0 && (
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
      { category === 'search_results' && (
        <div>
          { loader && <Loader /> }
          { !loader && (
            <Section
              key="search_results"
              max={recipes.length}
              feed={resultsObj}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Recipes;
