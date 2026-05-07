import { on } from "events";

// C:\Users\Paras.Bakshi\Desktop\React Course\Project 8 Typescript\react-ts\src\components\TodoItem.module.css
const TodoItem: React.FC<{text: string; onRemoveTodo:()=> void}> = (props) => {
  return (
    <div>
    <li onClick={props.onRemoveTodo}>{props.text}</li>
    </div>
  )
}

export default TodoItem
