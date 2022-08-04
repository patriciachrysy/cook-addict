import RecipeService from '../../services/RecipeService';

test('retrieve all the feeds from the Api', async () => {
  const feeds = await RecipeService.getFeed();
  expect(feeds).not.toBeUndefined();
}, 600000);

test('retrieve all the 20 first recipes from the Api', async () => {
    const recipes = await RecipeService.getAllRecipes();
    expect(recipes).not.toBeUndefined();
  }, 60000);

  test('get recipe details from the Api', async () => {
    const recipe = await RecipeService.getRecipe(8138);
    expect(recipe).not.toBeUndefined();
  }, 60000);

  test('retrieve all recipes containing the keyword vegan from the Api', async () => {
    const recipes = await RecipeService.getRecipeByFilter(null, 'vegan');
    expect(recipes).not.toBeUndefined();
  }, 60000);