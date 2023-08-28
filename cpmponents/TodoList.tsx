import React from 'react'

const TodoList = () => {
  return (
    <div>
      <ul className="ulcustom">
        <div className='todolist'>
          <li>✅読書</li>
          <span className='pointer'>✖️</span>
        </div>
      </ul>
    </div>
  )
}

export default TodoList