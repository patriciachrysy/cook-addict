import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getRecipesByFilter, startFetchingRecipe } from '../Redux/recipes/recipes';
import '../styles/Filter.css';

const Filter = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [tag, setTag] = useState('');
  const [keyword, setKeyword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    document.body.click();
    if (tag.trim() || keyword.trim()) {
      dispatch(startFetchingRecipe());
      dispatch(getRecipesByFilter({ tag, keyword }));
      navigate('/recipes/search_results');
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="filter-form">
      <div className="content">
        <input type="text" placeholder="Tag" value={tag} onChange={(e) => setTag(e.target.value)} />
        <input type="text" placeholder="Keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default Filter;
