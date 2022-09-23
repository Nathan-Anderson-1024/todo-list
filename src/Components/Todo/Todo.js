import React from 'react'
import './Todo.css'
export default function Todo(props) {
  return (
    <div className='Todo-item'>
      <label>
        <input type="checkbox" checked={props.todoItem.completed}></input>
        {props.todoItem.name}
      </label>
    </div>
  )
}
