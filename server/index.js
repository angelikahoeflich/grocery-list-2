const express = require('express');
const app = express();
const port = 4040;
const ctrl = require('./controller')


//middleware
app.use(express.json());

// crud/ endpoints

app.get('/api/ingredients', ctrl.getIngredients);
app.get('api/ingredients/:id', ctrl.getIngredient);
app.post('/api/ingredients', ctrl.addIngredient);
app.put('/api/ingredient/:id', ctrl.updateIngredient);
app.delete('/api/ingredients/:id', ctrl.deleteIngredient);


app.listen(port, console.log( `Listening on port ${port}`));
