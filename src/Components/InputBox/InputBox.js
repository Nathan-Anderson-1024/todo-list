import React, {useState} from 'react'
import './InputBox.css'

export default function InputBox(props) {
  const [todoInput, setTodoInput] = useState([]);

  const updateChange = ({target}) => {
    setTodoInput(target.value)
  }
  


  


  return (
    <div className='input-container'>
        <label for="input">Enter A New TODO below</label>
        <form className='input-line' onSubmit={props.stopReload}>
            <input id='input' onChange={props.updateChange}></input>
            <input type="submit" value="Add TODO" onSubmit={updateChange}></input>
        </form>
    </div>
  )
}
