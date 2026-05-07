import { useState } from "react";
import { EXAMPLES } from "../data";
import ButtonComponent from "./ButtonComponent";

export default function Example()
{// the setSelectedTopic function not only help in changing the value but the execution of app function again which was required. 
const [selectTopic, setSelectedTopic]=useState("");

let tabcontent=<p>Please select a topic</p>;

if(selectTopic){
  tabcontent=(
  <div id="tab-content">
    <h3>{EXAMPLES[selectTopic].title}</h3>
    <p>{EXAMPLES[selectTopic].description}</p>
    <pre>
      <code>
      {EXAMPLES[selectTopic].code}
      </code>
    </pre>
  </div>);
}

  function selectHandler(selectedButton)
{
    setSelectedTopic(selectedButton)
}
    return(
    <section id="examples">
              <h2>Examples</h2>
              <menu>
              <ButtonComponent isSelected={selectTopic==="components"} onSelect={()=> selectHandler('components')}> Components</ButtonComponent>
              <ButtonComponent isSelected={selectTopic==="jsx"} onSelect={()=> selectHandler('jsx')} > JSX</ButtonComponent>
              <ButtonComponent isSelected={selectTopic==="props"} onSelect={()=> selectHandler('props')}> Props</ButtonComponent>
              <ButtonComponent isSelected={selectTopic==="state"} onSelect={()=> selectHandler('state')}> State</ButtonComponent>
              </menu>

              {tabcontent}
       
            </section>
    );
}