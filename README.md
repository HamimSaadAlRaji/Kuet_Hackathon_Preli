# Recipe Management Backend

This project is a backend system for managing ingredients and recipes. It includes features for adding, updating, and retrieving recipes and ingredients, integrating MongoDB for storage, and supports interaction through RESTful APIs. The project is designed to store recipes in JSON format for efficient retrieval and chatbot interaction.

---

## Project Structure

```
.env
.gitignore
models/
    Ingredient.js
package.json
routes/
    ingredients.js
    recipes.js
server.js
services/
    recipesService.js
utils/
    fileUtils.js
my_fav_recipes.txt
```

### Explanation of Files and Directories

- **`.env`**: Environment variables configuration file.
- **`.gitignore`**: Specifies files and directories to ignore in version control.
- **`models/Ingredient.js`**: Mongoose schema for managing ingredient data.
- **`routes/ingredients.js`**: API routes for ingredients management.
- **`routes/recipes.js`**: API routes for recipe management.
- **`server.js`**: Main entry point of the application.
- **`services/recipesService.js`**: Business logic for recipes.
- **`utils/fileUtils.js`**: Utility functions for file operations.
- **`my_fav_recipes.txt`**: Text file storing recipe data in JSON format.

---

## How to Run the Project

### Prerequisites

- Node.js installed.
- MongoDB database connection.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/HamimSaadAlRaji/Kuet_Hackathon_Preli.git
   cd recipe-management-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment file:

   - Create a `.env` file in the root directory.
   - Add the following contents:
     ```
     MONGO_URI='mongodb+srv://mainulhasan:03440700@ingredientsbitfest.va6yg.mongodb.net/?retryWrites=true&w=majority&appName=IngredientsBitfest'
     PORT=3000
     ```

4. Start the server:

   ```bash
   npm start
   ```

5. The server will be running on `http://localhost:3000`.

---

## API Documentation

### Category: Ingredients

#### **Add or Update Ingredient**

- **Route**: `/ingredients`
- **Method**: `POST`
- **Sample Payload**:
  ```json
  {
    "name": "eggs",
    "quantity": 2
  }
  ```
- **Sample Response**:
  ```json
  {
    "_id": "64212abc123456",
    "name": "eggs",
    "quantity": 4,
    "__v": 0
  }
  ```

#### **Get All Ingredients**

- **Route**: `/ingredients`
- **Method**: `GET`
- **Sample Response**:
  ```json
  [
    {
      "_id": "64212abc123456",
      "name": "flour",
      "quantity": 2
    },
    {
      "_id": "64212abc123457",
      "name": "sugar",
      "quantity": 1.5
    }
  ]
  ```

#### **Remove Ingredients**

- **Route**: `/ingredients`
- **Method**: `PATCH`
- **Sample Payload**:
  ```json
  {
    "name": "eggs",
    "quantity": 1
  }
  ```
- **Sample Response**:
  ```json
  {
    "message": "eggs has been deleted"
  }
  ```

---

### Category: Recipes

#### **Add a New Recipe**

- **Route**: `/recipes`
- **Method**: `POST`
- **Sample Payload**:
  ```json
  {
    "name": "Spaghetti Carbonara",
    "ingredients": [
      { "name": "spaghetti", "amount": "200g" },
      { "name": "egg yolks", "amount": "4" },
      { "name": "parmesan cheese", "amount": "1 cup" }
    ],
    "taste": "Savory",
    "cuisine": "Italian",
    "preparation_time": "30 minutes",
    "steps": ["Cook spaghetti.", "Mix ingredients.", "Serve hot."]
  }
  ```
- **Sample Response**:
  ```json
  {
    "message": "Recipe added successfully",
    "recipe": {
      "id": 2,
      "name": "Spaghetti Carbonara",
      "ingredients": [
        { "name": "spaghetti", "amount": "200g" },
        { "name": "egg yolks", "amount": "4" },
        { "name": "parmesan cheese", "amount": "1 cup" }
      ],
      "taste": "Savory",
      "cuisine": "Italian",
      "preparation_time": "30 minutes",
      "steps": ["Cook spaghetti.", "Mix ingredients.", "Serve hot."]
    }
  }
  ```

#### **Get All Recipes**

- **Route**: `/recipes`
- **Method**: `GET`
- **Sample Response**:
  ```json
  [
    {
      "id": 1,
      "name": "Chocolate Cake",
      "ingredients": [
        { "name": "flour", "amount": "2 cups" },
        { "name": "sugar", "amount": "1.5 cups" },
        { "name": "cocoa powder", "amount": "0.5 cups" }
      ],
      "taste": "Sweet",
      "cuisine": "Dessert",
      "preparation_time": "60 minutes",
      "steps": ["Preheat oven.", "Mix ingredients.", "Bake for 40 minutes."]
    }
  ]
  ```

---

Feel free to explore and expand upon this repository as per your requirements!

