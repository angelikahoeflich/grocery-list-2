import React from 'react';

function IngredientsList (props){

  const {
    ingredients,
    toggleEdit,
    cancelEdit,
    updateIngredient,
    selectIngredient,
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
        <button className="select" onClick={selectIngredient}>
        +
        </button>
        <button className="edit" onClick={toggleEdit}>
        ✎
        </button>
        <button className="delete" onClick={deleteIngredient.bind(this, ingredient.id)}>
        ✕
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