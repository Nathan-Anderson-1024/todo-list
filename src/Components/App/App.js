import './App.css';
import Title from '../Title/Title';
import InputBox from '../InputBox/InputBox';
import TodoList from '../TodoList/TodoList';
import React, {useState, useEffect} from 'react';


function App() {
  const [todoInput, setTodoInput] = useState([]);

  
  const stopReload = (event) => {
    event.preventDefault();
  }
  const updateChange = ({target}) => {
    console.log(target.value)
  }
  return (
    <div>
      <Title />
      <InputBox stopReload={stopReload} updateChange={updateChange} />
      <TodoList todos={todoInput} />
    </div>
  );
}

export default App;
