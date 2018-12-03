import React, {Component} from 'react';

class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: " ",
            items: [],
        }
    }
    render() { 
        return (  
            <div>
                <h1>
                    Todo App
                </h1>

                <form>
                    <input placeholder="Enter Todo"></input>
                    <button type = "submit"> Add </button>
                </form>
            </div>
        );
    }
}

export default TodoList;