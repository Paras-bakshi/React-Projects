import './App.css';
import Todos from './components/Todos';
import Todo from './modals/todo';
import { useState } from 'react';
import NewTodo from './components/newTodo';


function App() {

  const [todos, setTodos]= useState<Todo[]>([]);
  // const todos=[
  //   new Todo("Learn React"),
  //   new Todo("Learn Typescript")
  // ]

  const addTodoHandler =(todoText: string)=>{
     const newTodo =new Todo(todoText);
     setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo);

     })
  };


const removeTodoHandler =(todoId: string)=>{
setTodos((prevTodos)=>{
  return prevTodos.filter(todo=> todo.id!==todoId);
})
  }

  return (
    <>
    <NewTodo onAddTodo={addTodoHandler}/>
    <Todos items={todos} onRemoveTodo={removeTodoHandler}></Todos>
    </>
  );
}

export default App;
