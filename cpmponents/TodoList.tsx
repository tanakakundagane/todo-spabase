import { Todo } from '@/utiles/interface';
import React from 'react'

type Props = {
  todos: Todo[];
}

const TodoList = (props: Props) => {
  const{ todos } = props;

  return (
    <div>
      <ul className="ulcustom">
        {todos.map((todo) => (
        <div key={todo.id}className='todolist'>
          <li>✅{todo.title}</li>
          <span className='pointer'>✖️</span>
        </div>
        ))}
      </ul>
    </div>
  )
}

export default TodoList