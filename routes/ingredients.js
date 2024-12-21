const express = require('express');
const Ingredient = require('../models/Ingredient');

const router = express.Router();

// Add or Update Ingredient
router.post('/', async (req, res) => {
    const { name, quantity } = req.body;

    try {
        let ingredient = await Ingredient.findOne({ name });

        if (ingredient) {
            ingredient.quantity += quantity;
            await ingredient.save();
        } else {
            ingredient = new Ingredient({ name, quantity });
            await ingredient.save();
        }

        res.status(201).send(ingredient);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get All Ingredients
router.get('/', async (req, res) => {
    try {
        const ingredients = await Ingredient.find({});
        res.send(ingredients);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Remove Ingredients
router.patch('/', async (req, res) => {
    const { name, quantity } = req.body;

    try {
        const ingredient = await Ingredient.findOne({ name });

        if (!ingredient) {
            return res.status(404).send({ message: 'Ingredient not found' });
        }

        ingredient.quantity -= quantity;

        if (ingredient.quantity <= 0) {
            await Ingredient.deleteOne({ name });
            res.send({ message: `${name} has been deleted` });
        } else {
            await ingredient.save();
            res.send(ingredient);
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
