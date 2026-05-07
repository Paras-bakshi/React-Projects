import CoreComponents from "./CoreComponents"
import { CORE_CONCEPTS } from "../data"
export default function CoreConcepts()
{
    return (
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
    )
    
    
}