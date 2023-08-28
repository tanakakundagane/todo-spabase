import React from 'react'
import TodoList from './TodoList'
import './components.css'

const TodoApp = () => {
  return (
    <section className="section">
      <h3>Supabase Todo App</h3>
      <form>
        <input type="text" className="inputcustom" />
        <button className="buttoncustom">Add</button> 
      </form>
      <TodoList />
    </section>
  )
}

export default TodoApp