const ingredients = require('./ingredients.json');
let list =[];

module.exports = {

  getIngredients: (req, res) => {
    return res.status(200).json(ingredients)
  },
  addToList: (req, res) => {
    let foodArr = ingredients;
    let newIngredient= ''

    newIngredient = req.body

    foodArr.push({
      id: foodArr.length+1,
      name: newIngredient.name
    })
    console.log(ingredientsList)

    res.status(200).send(foodArr)

  },
  editQuantity: (req, res) => {
    const { index } = req.params;
    const { quantity } = req.body;

    list[index].quantity = quantity;

    res.status(200).send(list);
  },
  removeFromList: (req, res) => {
    const { index } = req.params;

    list.splice(index, 1);

    res.status(200).send(list);
  }
}