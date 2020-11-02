const express = require('express');
const app = express();
const port = 4040;
const ctrl = require('./controller')



app.use(express.json());

// endpoints

app.get("/api/ingredients", ctrl.getIngredients);
app.post('/api/ingredients/:id', ctrl.addToList);
app.put('/api/ingredients/:index', ctrl.editQuantity);
app.delete('/api/ingredients/:index', ctrl.removeFromList);




app.listen(port, console.log( `Listening on port ${port}`));
