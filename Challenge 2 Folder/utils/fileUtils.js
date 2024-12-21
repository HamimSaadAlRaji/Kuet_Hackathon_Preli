const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../my_fav_recipes.txt');

const readRecipes = () => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '[]'); // Initialize with an empty array if the file doesn't exist
  }
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

const writeRecipes = (recipes) => {
  fs.writeFileSync(filePath, JSON.stringify(recipes, null, 2));
};

module.exports = { readRecipes, writeRecipes };
