import { createAsyncThunk } from '@reduxjs/toolkit';
import RecipeService from '../../services/RecipeService';

const RETRIEVE_ASYNC_RECIPES = 'cook-addict/recipe/RETRIEVE_RECIPES';
const RETRIEVE_RECIPES = 'cook-addict/recipe/RETRIEVE_RECIPES/fulfilled';
const RETRIEVE_ASYNC_BY_FILTER_RECIPES = 'cook-addict/recipe/RETRIEVE_BY_FILTER_RECIPES';
const RETRIEVE_BY_FILTER_RECIPES = 'cook-addict/recipe/RETRIEVE_BY_FILTER_RECIPES/fulfilled';
const RETRIEVE_ASYNC_RECIPE = 'cook-addict/recipe/RETRIEVE_RECIPE';
const RETRIEVE_RECIPE = 'cook-addict/recipe/RETRIEVE_RECIPE/fulfilled';
const START_FETCHING_RECIPE = 'cook-addict/recipe/START_FETCHING_RECIPE';

const initialState = {
  loader: true,
  recipes: [],
  recipe: null,
};

export const getRecipes = createAsyncThunk(
  RETRIEVE_ASYNC_RECIPES,
  async () => {
    const res = await RecipeService.getAllRecipes();
    const payload = { loader: false, recipes: res.data.results };
    return payload;
  },
);

export const getRecipesByFilter = createAsyncThunk(
  RETRIEVE_ASYNC_BY_FILTER_RECIPES,
  async (searchKeys) => {
    const res = await RecipeService.getRecipeByFilter(searchKeys.tag, searchKeys.keyword);
    const payload = { loader: false, recipes: res.data.results };
    return payload;
  },
);

export const startFetchingRecipe = () => ({ type: START_FETCHING_RECIPE, payload: true });

export const getRecipe = createAsyncThunk(
  RETRIEVE_ASYNC_RECIPE,
  async (recipeId) => {
    const res = await RecipeService.getRecipe(recipeId);
    const payload = { loader: false, recipe: res.data };
    return payload;
  },
);

const recipes = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_RECIPES:
      return { ...state, recipes: action.payload.recipes, loader: action.payload.loader };
    case RETRIEVE_BY_FILTER_RECIPES:
      return { ...state, recipes: action.payload.recipes, loader: action.payload.loader };
    case START_FETCHING_RECIPE:
      return { ...state, loader: action.payload };
    case RETRIEVE_RECIPE:
      return { ...state, recipe: action.payload.recipe, loader: action.payload.loader };
    default:
      return state;
  }
};

export default recipes;
