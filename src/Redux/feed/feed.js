import { createAsyncThunk } from '@reduxjs/toolkit';
import RecipeService from '../../services/RecipeService';

const RETRIEVE_ASYNC_FEED = 'cook-addict/feed/RETRIEVE_FEED';
const RETRIEVE_FEED = 'cook-addict/feed/RETRIEVE_FEED/fulfilled';
const LIST_FEED_RECIPES = 'cook-addict/feed/LIST_FEED_RECIPES';

const initialState = {
  loader: true,
  feeds: [],
  feed: [],
};

export const getFeed = createAsyncThunk(
  RETRIEVE_ASYNC_FEED,
  async () => {
    const res = await RecipeService.getFeed();
    const firstFeed = res.data.results[0];
    const otherFeeds = res.data.results.filter((elt) => elt.category && elt.type === 'carousel');
    const payload = { loader: false, feeds: [firstFeed, ...otherFeeds] };
    return payload;
  },
);

export const getByCategory = (payload) => ({ type: LIST_FEED_RECIPES, payload });

const feed = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_FEED:
      return {
        ...state,
        feeds: action.payload.feeds,
        loader: action.payload.loader,
      };
    case LIST_FEED_RECIPES:
      return {
        ...state,
        feed: state.feeds.filter((feed) => feed.category === action.payload),
      };
    default:
      return state;
  }
};

export default feed;
