import React from 'react';

function SelectedIngredients(props){
  let selected = props.list.map((ingredient)=> {
    return(
    <li className="selected-ingredients" key={ingredient.id}>{ingredient.name} - quantity {ingredient.quantity}
    </li>
    )
  })
  return <ul>{selected}</ul>
}
export default SelectedIngredients;