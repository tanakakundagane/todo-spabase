"use client"
import React, { useEffect, useState } from 'react'
import { addTodo, getAllTodos} from "../utiles/supabaseFunctions"
import TodoList from './TodoList'
import './components.css'

const TodoApp = () => {
  const [todos, setTodos] = useState<any>([]);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const getTodos = async () => {
      const todos = await getAllTodos();
      setTodos(todos);
      console.log(todos);
    };
    getTodos();
  },[]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if(title === "")return;

    //Todoの追加
    await addTodo(title);
    let todos = await getAllTodos();
    setTodos(todos);

    setTitle("");
  } ;


  return (
    <section className="section">
      <h3>Supabase Todo App</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input 
          type="text" 
          className="inputcustom" 
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          />
        <button className="buttoncustom">Add</button> 
      </form>
      <TodoList todos={todos} setTodos={setTodos}/>
    </section>
  )
}

export default TodoApp