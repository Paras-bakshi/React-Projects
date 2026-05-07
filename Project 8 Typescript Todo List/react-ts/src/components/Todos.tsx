import React from 'react'
import Todo from '../modals/todo'
import TodoItem from './TodoItem';
// import classes from './Todos.module.css';

const Todos: React.FC<{items:Todo[]; onRemoveTodo:(id: string)=> void}> = (props) => {
  return (
    // className={classes.todos}
    <ul>
        {props.items.map((item)=>(
            <div><TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodo.bind(null,item.id)}/></div>

        ))}
    </ul>
  )
}

export default Todos
