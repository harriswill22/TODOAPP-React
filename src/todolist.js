import React, {Component} from 'react';
import List from'./list';

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

                <form onSubmit={this._OnSubmit}>
                    <input value={this.state.term} 
                    onChange={this._OnChange} 
                    placeholder="Enter Todo"></input>
                    <button type = "submit"> Add </button>
                    <div>
                        <List items = {this.state.items}/>
                    </div>
                </form>
            </div>
        );
    }


    _OnChange =(event) =>{
        this.setState({
            term: event.target.value
        });
    }

    _OnSubmit =(event) =>{
        event.preventDefault();
        // console.log('submitted');
        this.setState({
            term: "",
            items:[...this.state.items,this.state.term]
        });
        
    };


}

export default TodoList;