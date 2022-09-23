import React from 'react'
import Todo from '../Todo/Todo'

export default function TodoList(props) {
  return props.todos.map((todo) => {
    return <Todo todoItem={todo} key={todo.id} toggleTodo={props.toggleTodo} />
  })
    
  
}
