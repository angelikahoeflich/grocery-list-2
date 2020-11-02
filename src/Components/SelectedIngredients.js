import React from 'react';

function SelectedIngredients(props){
  let selected = props.list.map((ingredient)=> {
    return(
    <li className="selected-ingredients" key={ingredient.id}>{ingredient.name}<input type="text"/> <button onClick={props.editItem}>add pencil icon here</button>
  
    </li>
    )
  })
  return <ul>{selected}</ul>
}
export default SelectedIngredients;