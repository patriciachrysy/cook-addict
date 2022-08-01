import http from '../http-common';

const getFeed = () => http.get('feeds/list');

const getAllRecipes = (index = 0, limit = 20) => http.get('/recipes/list', {
    params: {
        from: index,
        size: limit
    }
});

const getRecipeByFilter = (tagName = null, keyword) => http.get('/recipes/list', {
    params: {
        tags: tagName,
        q: keyword
    }
});

const RecipeService = {
    getFeed,
    getAllRecipes,
    getRecipeByFilter
}

export default RecipeService;