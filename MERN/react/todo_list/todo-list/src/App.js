import logo from './logo.svg';
import './App.css';
import TodoList from "./components/TodoList";
import React, {useState} from "react";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleNewTodoSubmit = (e)=> {
    e.preventDefault();

    if (newTodo.length ===0) {
      return;
    }

    const todoItem = {
      text: newTodo,
      complete: false,
    };

    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });

    setTodos(filteredTodos);
  };

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todo, i) => {
      if (idx === i) {
        todo.complete = !todo.complete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };




  return (
    <div className="App container">
      <form
        onSubmit={(e) => {
          handleNewTodoSubmit(e);
      }}
      >
        <input 
          onChange={(e) => {
            setNewTodo(e.target.value)
          }}
          type="test"
          value={newTodo}
        />
        <div>
          <button>Add</button>
        </div>
      </form>

      <hr />
      {todos.map((todo, i) => {
        return <TodoList key={i}  todo={todo} handleToggleComplete={handleToggleComplete} i={i} handleTodoDelete={handleTodoDelete} />;
      })}
    </div>
  );
}

export default App;
