const database = require('./ingredients.json');
let nextId = database.ingredients.length + 1;

module.exports = {

  getIngredients:(req, res) => {
    res.status(200).json(database.ingredients);

  },
  getIngredient: (req, res) => {
    const {id} = req.params;
    const chosenIngredient = database.ingredients.filter(ingredient => ingredient.id === id)

    res.status(200).json(chosenIngredient);
  },
  addIngredient: (req, res) => {
    const newIngredient = req.body;

    database.ingredients.push({
      id: nextId++,
      name: newIngredient.name
    })
    res.status(201).json(database.ingredients)
  },

  updateIngredient: (req, res) => {
    const {id} = req.params;
    const { newName} = req.body;

    const updateIngredient = {
      id: +id,
      name: newName
    }
    console.log("updatedIngredient", updatedIngredient)

    const indexToChange = database.ingredients.findIndex(ingredient => ingredient.id === +id);

    database.ingredients[indexToChange] = updatedIngredient;

    res.status(200).json(database.ingredients);
  },

  deleteIngredient: (req, res) => {
    const {id} = req.params;
    const {ingredient} = database;

    const newList = ingredients.filter(ingredient => ingredient.id !== +id);

    database.ingredients = newList;

    res.status(200).json(newList);


  }


}