const express = require('express');
const { addRecipe, getAllRecipes, searchRecipes } = require('../services/recipesService');

const router = express.Router();

// Add a new recipe
router.post('/', (req, res) => {
  const { name, ingredients, taste, cuisine, preparation_time, steps, reviews } = req.body;

  if (!name || !ingredients || !steps) {
    return res.status(400).json({ error: 'Name, ingredients, and steps are required' });
  }

  const newRecipe = addRecipe({ name, ingredients, taste, cuisine, preparation_time, steps, reviews });
  res.status(201).json({ message: 'Recipe added successfully', recipe: newRecipe });
});

// Retrieve all recipes
router.get('/', (req, res) => {
  const recipes = getAllRecipes();
  res.json(recipes);
});
 

module.exports = router;
