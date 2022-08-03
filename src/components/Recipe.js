import React from 'react';
import { useParams } from 'react-router-dom';

const Recipe = () => {
  const { slug } = useParams();
  return (
    <div>
      Hello this is
      {slug}
      {' '}
      recipe
    </div>
  );
};

export default Recipe;
