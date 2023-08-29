import { Todo } from '@/utiles/interface';
import { deleteTodo, getAllTodos } from '@/utiles/supabaseFunctions';
import React from 'react'

type Props = {
  todos: Todo[];
  setTodos: React.Dispatch<any>;
}

const TodoList = (props: Props) => {
  const{ todos, setTodos } = props;

  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    let todos = await getAllTodos();
    setTodos(todos);
  };

  return (
    <div>
      <ul className="ulcustom">
        {todos.map((todo) => (
        <div key={todo.id}className='todolist'>
          <li>✅{todo.title}</li>
          <span 
            className='pointer'
            onClick={() => handleDelete(todo.id)}
          >✖️</span>
        </div>
        ))}
      </ul>
    </div>
  )
}

export default TodoList