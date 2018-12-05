import React, { Component } from "react";
import List from "./list";
import TodoForm from "./TodoForm";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
    // ewwwww.
    // this._deleteTodo = this._deleteTodo.bind(this);
  }

  componentDidMount() {
    // Make the Ajax call!
    // Do eeeeet!
    console.log('about to retrieve todos');
    fetch('/todos')
    .then(r => r.json())
    .then(todoArray => {
        console.table(todoArray);
        // Version #1: just keep the names
        // this.setState({
        //   items: todoArray.map(todo => todo.name)
        // });

        // Version #2: save the entire array of objects
        this.setState({
          items: todoArray
        });

      })
  }

  render() {
    return (
      <div className="todo-container">
        <h1 className="title">Todo App</h1>
        <TodoForm 
          onSubmit={this._onSubmit}
          term={this.state.term}
          onChange={(event) => this._onChange(event.target.value)}
        />
        <div>
          <List 
            items={this.state.items}
            handleClick={this._deleteTodo}
          />
        </div>
      </div>
    );
  }

  _deleteTodo = (idToDelete) => {
    console.log(this);

    fetch(`/todos/${idToDelete}`, {
      method: 'DELETE'
    })
    .then(result => {
      console.log(result);
      this.setState({
        items: this.state.items.filter(item => item.id !== idToDelete)
      });
    })


    // let itemsToKeep = [];
    // // keep all the items except the one at `indexToDelete`
    // this.state.items.forEach((item, index) => {
    //   if (index === indexToDelete) {
    //     console.log(`${index}: delete it!`);
    //   } else {
    //     console.log(`${index}: keep it!`);
    //     itemsToKeep.push(item);
    //   }
    // });
    // // this.state.items = itemsToKeep;
    // this.setState({
    //   items: itemsToKeep
    // });
  }

  _onChange = userInput => {
    // const userInput = event.target.value;
    console.log(userInput);
    this.setState({
      term: userInput
    }, () => {
      console.log('wheee! state is now updated');
    });
  };

  _onSubmit = event => {
    //puts on the brakes
    event.preventDefault();
    // console.log("submitted!");

    fetch('/todos', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.term
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => r.json())
    .then(todo => {
      console.log(todo);
      console.log('^^ is your new todo. enjoy.')
      this.setState({
        term: "",
        items: [...this.state.items, todo]
      });
    })

  };
}



export default TodoList;