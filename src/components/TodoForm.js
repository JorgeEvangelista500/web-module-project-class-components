import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input:''
        }
    }

    handleChanges = e => {
        this.setState({
            ...this.state,
            input: e.target.value
        });
    };

    handleSubmit = e => {
        this.props.handleAddTodo(this.state.input)
        
    }
    render(){
        return (
            <div>
                <input onChange={this.handleChanges} type="text" name="item" />
                <button onClick={this.handleSubmit}>Add Todo</button>
                <button onClick={this.props.handleClearTodos}>Clear completed</button>
            </div>
        )
    }
}

export default TodoForm;