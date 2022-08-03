import { configureStore } from '@reduxjs/toolkit';
import feed from './feed/feed';

const store = configureStore({
  reducer: {
    feed,
  },
});

export default store;
