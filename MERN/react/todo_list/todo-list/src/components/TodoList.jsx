import React, {useState} from "react";

const TodoList = (props)=> {
    const todoClasses = ["bold", "italics"];

    if (props.todo.complete) {
        todoClasses.push("line-through")
        }

    return (
        <div>
        <input
            onChange={(e) => {
                props.handleToggleComplete(props.i);
            }}
            checked={props.todo.complete}
            type="checkbox"
        />
        <span className={todoClasses.join("")}>
        {props.todo.text}</span>
        <button 
            onClick={(e) =>{
                props.handleTodoDelete(props.i);
            }}
            style={{ marginLeft: "10px" }}
        >
            Delete
        </button>
        </div>
    );
};






export default TodoList;