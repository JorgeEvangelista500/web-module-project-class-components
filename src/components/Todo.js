import React from "react";

class Todo extends React.Component {
    render(){
        const handleClick = () => {
            this.props.handleToggleTodo(this.props.item)
    }
    return (
        <div onClick={handleClick} className={`item${this.props.item.completed ? ' completed': ''}`}>
            <p>{this.props.item.task}</p>
        </div>
    )
}
}

export default Todo;