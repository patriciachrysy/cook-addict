import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../components/Feed';
import Recipes from '../components/Recipes';
import Recipe from '../components/Recipe';

const AppRoutes = () => (
  <Routes>
    <Route exact="true" path="/" element={<Feed />} />
    <Route path="/recipes/:category" element={<Recipes />} />
    <Route path="/recipe/:slug" element={<Recipe />} />
  </Routes>
);

export default AppRoutes;
