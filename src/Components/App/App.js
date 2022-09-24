import './App.css';
import TodoList from '../TodoList/TodoList';
import React, {useState, useEffect, useRef} from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todoInput, setTodoInput] = useState(JSON.parse(localStorage.getItem('todoApp.todos')) ?? []);


  useEffect(() => {
    localStorage.setItem('todoApp.todos', JSON.stringify(todoInput))
  },[todoInput])


  const todoNameRef = useRef();
  
  const stopReload = (event) => {
    event.preventDefault();
  }
  const handleAddTodo = (event) => {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodoInput((previousTodo) => {
      return [...previousTodo, {id: uuidv4(), name: name, completed: false}]
    })
    todoNameRef.current.value = null;
  }

  const toggleTodo = (id) => {
    const newTodoList = [...todoInput]
    const todoToModify = newTodoList.find(todo => todo.id === id)
    todoToModify.completed = !todoToModify.completed
    setTodoInput(newTodoList)
  }



  return (
    <div>
      <h1 className='input-title'>TODO List</h1>
      <div className='input-container'>
        <label>Enter A New TODO below</label>
        <form className='input-line' onSubmit={stopReload}>
            <input id='input' ref={todoNameRef}></input>
            <input type="submit" value="Add TODO" onClick={handleAddTodo}></input>
        </form>
      </div>
      <TodoList todos={todoInput} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
