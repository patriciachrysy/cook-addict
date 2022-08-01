import { createAsyncThunk } from "@reduxjs/toolkit";
import RecipeService from '../../services/RecipeService';

const RETRIEVE_ASYNC_FEED = 'cook-addict/feed/RETRIEVE_FEED';
const RETRIEVE_FEED = 'cook-addict/feed/RETRIEVE_FEED/fulfilled';
const LIST_FEED_RECIPES = 'cook-addict/feed/GET_CATEGORY_RECIPES';

const initialState = [];

export const getFeed = createAsyncThunk(
    RETRIEVE_ASYNC_FEED,
    async () => {
        const res = await RecipeService.getFeed();
        const payload = res.data.results;
        return payload;
    }
);

export const getByCategory = (payload) => ({type: LIST_FEED_RECIPES, payload})

export default feed = (state = initialState, action) => {
    switch (action.type) {
        case RETRIEVE_FEED:
            return action.payload
        case LIST_FEED_RECIPES:
            return state.find((feed) => feed.category === action.payload)
        default:
            return state;
    }
}