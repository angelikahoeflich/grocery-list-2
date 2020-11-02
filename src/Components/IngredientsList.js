import React from 'react';

function IngredientsList (props){

  const {
    ingredients,
    toggleEdit,
    cancelEdit,
    updateIngredient,
    deleteIngredient
  } = props

  let listItems = ingredients.map((ingredient) => {
    return (
      <li key={ingredient.id} index={ingredient.id}>
        <p contentEditable={ingredient.id === props.currentlyEditing ? "true" : false}>
          {ingredient.name}
        </p>

        {ingredient.id === props.currentlyEditing ? 
        <>
        <button className="save" onClick={updateIngredient}>save</button>

        <button className="cancel" onClick={cancelEdit}>cancel</button>
        </>
        :
        <>
        <button className="select">
          add plus here
        </button>
        <button className="edit">
          add pencil icon here
        </button>
        <button className="delete">
          add x here
        </button>
        </>

      }
      </li>
    )
  })

  return(
    <ul>{listItems}</ul>
  );
}
export default IngredientsList;