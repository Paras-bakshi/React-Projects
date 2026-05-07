import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Headers from "./components/Headers";
import CoreComponents from "./components/CoreConcepts";
import ButtonComponent from "./components/ButtonComponent";
import { useState } from "react";


function App() {

// the setSelectedTopic function not only help in changing the value but the execution of app function again which was required. 
const [selectTopic, setSelectedTopic]=useState("");

let tabcontent=<p>Please select a topic</p>;

if(selectTopic){
  tabcontent=(
  <div id="tab-content"><h3>{EXAMPLES[selectTopic].title}</h3>
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
    setSelectedTopic(selectedButton);
}
  return (
    <> 
      <Headers></Headers>

      <main>

        <section id="core-concepts">


          <h2>Core Concepts</h2>
          <ul>

            {CORE_CONCEPTS.map((item)=>(
              <CoreComponents key={item.title} {...item}/>
            ))}

            {/* {///* Down you can see the easy ways of renderding */} 

            {/* <CoreComponents
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
            />

            <CoreComponents {...CORE_CONCEPTS[1]}/>
            <CoreComponents {...CORE_CONCEPTS[2]}/>
            <CoreComponents {...CORE_CONCEPTS[3]}/> */}
          </ul>
        
        </section>


        <section id="examples">
          <h2>Examples</h2>
          <menu>
          <ButtonComponent isSelected={selectTopic==="components"} onSelect={()=> selectHandler('components')}> Components</ButtonComponent>
          <ButtonComponent isSelected={selectTopic==="jsx"} onSelect={()=> selectHandler('jsx')} > JSX</ButtonComponent>
          <ButtonComponent isSelected={selectTopic==="props"} onSelect={()=> selectHandler('props')}> Props</ButtonComponent>
          <ButtonComponent isSelected={selectTopic==="state"} onSelect={()=> selectHandler('state')}> State</ButtonComponent>
          </menu>

          {/* //just time output */}
          {selectTopic}

          {/* either follow operator approach or concise one */}
          {tabcontent}

        </section>


      </main>
    </>
  );
}

export default App;
