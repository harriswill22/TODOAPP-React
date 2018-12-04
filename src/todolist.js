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
}
render() {
    return (
    <div className="todo-container">
        <h1 className="title">Todo App</h1>
        <TodoForm
        onSubmit={this._onSubmit}
        term={this.state.term}
        onChange={this._onChange}
        />

        <div>
        <List items={this.state.items} delete={this.delete}
            handleClick ={this._deleteTodo}
        />
        </div>
    </div>
    );
}

_deleteTodo = indexToDelete => {
    this.setState({
        items: this.state.items.filter((item,index) => index !== indexToDelete)
    });
    // let itemsToKeep= []
    // this.state.items.forEach((item, index) =>{
    //     if (index === indexToDelete) {
    //         console.log(`${index}: deleted it`);
    //     }else {
    //         console.log(`keep it ${index}`);
    //         itemsToKeep.push(item)
    //     }
    // });
    // this.setState({
    //     items: itemsToKeep 
    // })
}



_onChange = event => {
    this.setState({
    term: event.target.value
    });
};

_onSubmit = event => {
    //puts on the brakes
    event.preventDefault();
    // console.log("submitted!");
    this.setState({
    term: "",
    items: [...this.state.items, this.state.term]
    });
};
}

export default TodoList;
