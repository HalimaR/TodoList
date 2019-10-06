import React from "react";
import ContactCard from "./ContactCard";
import todosData from "../todosData";

class MainConternt extends React.Component {
  constructor(){
    super()
    this.state = { todos: todosData};
    this.handleChange = this.handleChange.bind(this);
  }
//if iets geberud ? dan dit : anders dit
  handleChange(id){
    this.setState((prevState)=>{ //maak je een nieuw arry todo
      const updateTodos = prevState.todos.map(todo =>{
        if(todo.id === id){
          todo.bekeken = !todo.bekeken
        }
        return todo
      })
      return{todos: updateTodos}
    })
    console.log("klik",id);
  }
  
  render(){                   //loop je door de data
      const animeComponents = this.state.todos.map(item => 
          <ContactCard
            key={item.id}
            //als je alles in 1 wilt doorgeven
            // ietem={item} in de contactcard doe je dan props.item.id
            id={item.id}
            anime={item.anime}
            bekeken={item.bekeken}
            handleChange={this.handleChange}/>)
      return (
        <div>
          
          <div className="todo-list">
            <h1>Al gezien?</h1>
            {animeComponents}
            
          </div>
        </div>
      );
  }
}
export default MainConternt;
