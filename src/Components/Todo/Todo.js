import React from 'react'
import './Todo.css'
export default function Todo(props) {

  const handleTodoClick = () => {
    props.toggleTodo(props.todoItem.id)
  }
  
  return (
    <div className='Todo-item'>
      <label>
        <input type="checkbox" checked={props.todoItem.completed} onChange={handleTodoClick}></input>
        {props.todoItem.name}
      </label>
    </div>
  )
}
