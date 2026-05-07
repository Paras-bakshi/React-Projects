import React from 'react'
import { useRef } from 'react';


const NewTodo: React.FC<{onAddTodo:(text: string)=> void}> = (props) => {

    const todoTextInputRef= useRef<HTMLInputElement>(null);

    const submitHnadler =(event:React.FormEvent)=>{
        event.preventDefault();

        const enteredText= todoTextInputRef.current!.value;
        if(enteredText?.trim().length===0)
        {
            return;
        }
        props.onAddTodo(enteredText);
        };


  return (
    <form onSubmit={submitHnadler}>
        <label htmlFor="text">Todo Text</label>
        <input type="text" id="text" ref={todoTextInputRef}></input>
        <button>Add Todo</button>
    </form>
  )
}

export default NewTodo
