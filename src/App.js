import React from 'react';
 import List from './components/list.js'
import './App.css';
import tachyons from 'tachyons';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      items : [],
      currentItem:{
        text : '',
        key : ''
      }
    }

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

handleInput(event){
  this.setState({
    currentItem:{
      text : event.target.value,
      key : Date.now()

    }
  })
}
deleteItem(key){
  const filteredItems = this.state.items.filter(item=>item.key!==key);
  this.setState({items:filteredItems})
}



addItem(event){
event.preventDefault();
const newItem = this.state.currentItem;
console.log(newItem); 
if(newItem.text!==""){
  const items = [...this.state.items,newItem];
  this.setState({
    items : items,
    currentItem :{
      text : '',
      key : ''
    }
  })
}
}


  render(){

    return(
      <div  className = "container"  >
      <header className = "tc pa4">
          <form  id = "todoform" onSubmit={this.addItem} className ="flex-justify m2 ">
          <h1 className ="white tc"> TO DO LIST.. </h1>
          <input className = "br2 ba pa2 ba     b--green  bg-lightest-blue  w-70 b--green  bg-light-green"  type = "text" placeholder =" enter a list" onChange ={this.handleInput}
          value = {this.state.currentItem.text}/>
          <button className = "br2 ba pa2 bg-yellow b--red w-20 grow" type = "submit"> add </button>
          </form>
        </header>
        <List items = {this.state.items} deleteItem ={this.deleteItem}/>
         
 
      </div>
      )
  }
}

export default App;
