import React from 'react';
// import './App.css';
import TodoForm from './TodoForm';
import './Responsive.css';

export const TodoContext = React.createContext()

export default function Main() {
  return (
    <div className='margin Container'> 
    <h1>Hello World!</h1>
    <TodoForm />
    </div>
  )
}
