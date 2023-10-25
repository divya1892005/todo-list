import React from 'react';
import './App.css';

export default function TodoList({ todos, removeTodo, editTodo, editIndex, setEditIndex }) {
  return (
    <ol className="list-div">
      {todos.map((item, index) => (
        <div className="list" key={index}>
          {index === editIndex ? (
            // Input field for editing
            <div className="main-list">
              <input className='edit-input' type="text" defaultValue={item} />
              <div className='icon-div'>
              <button 
                className='edit-btns'
                onClick={() => {
                  const newContent = document.querySelector('.edit-input').value;
                  editTodo(newContent, index);
                }}
                >Save</button>
              <button className='edit-btns' onClick={() => setEditIndex(-1)}>Cancel</button>
              </div>
            </div>
          ) : (
            // Display item with Edit button
            <div className="main-list" >
              <li className='list-wrap'>{item}</li>
              <div className="icon-div">
                <i onClick={() => removeTodo(item)} className="fa fa-trash-o"></i>
                <i onClick={() => setEditIndex(index)} className="fa fa-edit"></i>
              </div>
            </div>
          )}
        </div>
      ))}
    </ol>
  );
}
