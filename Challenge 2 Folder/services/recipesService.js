const { readRecipes, writeRecipes } = require('../utils/fileUtils');

// Add a new recipe
const addRecipe = (recipeData) => {
  const recipes = readRecipes();
  const newRecipe = { id: Date.now(), ...recipeData }; // Add a unique ID
  recipes.push(newRecipe); // Add the new recipe to the array
  writeRecipes(recipes);   // Save the updated array to the file
  return newRecipe;
};

// Retrieve all recipes
const getAllRecipes = () => readRecipes();

// Search recipes by criteria
const searchRecipes = (criteria) => {
  const recipes = readRecipes();
  const { taste, cuisine } = criteria;

  // Filter recipes by taste or cuisine if provided
  return recipes.filter(recipe => {
    return (!taste || recipe.taste?.toLowerCase() === taste.toLowerCase()) &&
           (!cuisine || recipe.cuisine?.toLowerCase() === cuisine.toLowerCase());
  });
};

module.exports = { addRecipe, getAllRecipes, searchRecipes };
