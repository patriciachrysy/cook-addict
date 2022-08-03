import { configureStore } from '@reduxjs/toolkit';
import feed from './feed/feed';
import recipes from './recipes/recipes';

const store = configureStore({
  reducer: {
    feed,
    recipes,
  },
});

export default store;
