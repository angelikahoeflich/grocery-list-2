import React, {Component} from 'react';
import './App.css';
import Axios from 'axios';
import IngredientsList from './Components/IngredientsList';
import SelectedIngredients from './Components/SelectedIngredients';

class App extends Component {
  constructor(){
    super();

    this.state = {
      ingredients: [],
      newItemValue: '',
      currentlyEditing: 0,
      selected: []
    }

    this.toggleEdit = this.toggleEdit.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.updateIngredient = this.updateIngredient.bind(this);
    this.newItemChange = this.newItemChange.bind(this);
    this.listenForEnter = this.listenForEnter.bind(this);
    this.selectIngredient = this.selectIngredient.bind(this);
  }
  

  componentDidMount(){
    Axios.get("http://localhost:4040/api/ingredients")
      .then((res) => {
        console.log("res", res);
        this.setState({
          ingredients: res.data
        });
      })
        .catch((err) => console.log(err));
  }
  
  selectIngredient(click) {
    const ingredientId = click.target.parentElement.getAttribute("index");
    const selectedIngredient = this.state.ingredients.filter(
      ingredient => +ingredientId === ingredient.id
    );

    selectedIngredient[0].quantity = 1;

    this.setState({
      selected: [...this.state.selected, selectedIngredient[0]]
    })
  
  }

  updateIngredient(click){
    const index = +click.target.parentElement.getAttribute('index');
    const newName = click.target.previousSibling.innerText;
    const updatedIngredient = {
      id: index,
      newName: newName
    }
    Axios.put(`http:/localhost:4040/api/ingredients/${index}`, updatedIngredient)
      .then((res) => {
        this.setState({
          ingredients: res.data,
          currentlyEditing: 0
        })
      })
      .catch( err => console.log("err", err));
  }
  deleteIngredient = (index) => {
    Axios.delete(`http://localhost:4040/api/ingredients/${index}`)
      .then((res) => {
        this.setState({
          ingredients: res.data
        });
      })
      .catch( err => console.log("err", err))
  }
  toggleEdit(click) {
    const index = +click.target.parentElement.getAttribute('index');
    this.setState({
      currentlyEditing: index
    });
  }
  cancelEdit(click){
    this.setState({
      currentlyEditing: 0
    });
  }
  newItemChange(keypress){
    if(keypress.code !== "Enter"){
      this.setState({
        newItemValue : keypress.target.value
      })
    }
  }
  listenForEnter(keypress){
    if(keypress.code === "Enter"){
      let newIngredient = {
        name: this.state.newItemValue
      }
      console.log("newIngredient", newIngredient);
      Axios.post("http://localhost:4040/api/ingredients", newIngredient)
      .then((res) => {
        this.setState({
          ingredients: res.data,
          newItemValue: ''
        });
      })
      .catch((err) => console.log(err))
    }
  }

  render(){
    return(
      <div>
        <header className="header">
          <h1>WHAT'S IN YOUR FRIDGE?</h1>
        </header>
        <main className="main-list">
        <section className ="ingredients">
          <h3>Ingredients:</h3>
          <input id="newItem" type="text" value={this.state.newItemValue} onChange={this.newItemChange} onKeyPress={this.listenForEnter}/>
          <IngredientsList 
            ingredients={this.state.ingredients}
            currentlyEditing={this.state.currentlyEditing}
            toggleMenu={this.toggleMenu}
            selectIngredient={this.selectIngredient}
            updateIngredient={this.updateIngredient}
            deleteIngredient={this.deleteIngredient}


            toggleEdit={this.toggleEdit}
            cancelEdit={this.cancelEdit} />
        </section>

        <section className="selected">
          <h3>GROCERY LIST</h3>
          <SelectedIngredients list={this.state.selected}/>

        </section>

        </main>
      </div>
    );
  }
}

export default App;