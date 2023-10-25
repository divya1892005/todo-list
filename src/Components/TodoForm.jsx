import React, { useState } from 'react'
import TodoList from './TodoList'
import './App.css'

export default function TodoForm() {

  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  const [editIndex, setEditIndex] = useState(-1)

    const AddTodo = (e) => {
      e.preventDefault()
      if(input.trim() !== '') {
        setTodos([...todos, input]);
        setInput("")
      }
    }

    const RemoveTodo = (todo) => {
      const removeTodo = todos.filter((item) => item !== todo)
      setTodos(removeTodo)
    }

    const EditTodo = (newContext, index) => {
      if (newContext.trim() !== '') {
        const editTodo = [...todos]
        editTodo[index] = newContext
        setTodos(editTodo)
        setEditIndex(-1)
      }
    }

  return (
    <div className='form-list'>
    <div className='text-div'>
        <h1>What's the Plan for Today?</h1>      
      <form onSubmit={AddTodo}>
        <input 
          className='add-input'
          type = "text" 
          placeholder = 'Add a Todo'
          name = 'input'
          value = {input}
          onChange = {(e) => setInput(e.target.value)}
        />
        <button className='add-btn'>Add Todo</button>
      </form>
      </div>
      <TodoList 
        editTodo = {EditTodo} 
        editIndex = {editIndex}
        setEditIndex = {setEditIndex}
        removeTodo = {RemoveTodo} 
        todos={todos} 
      />
    </div>
  )
}
