
// Important to understand the below code

// import { useState } from "react";

// export default function Player() {

// const[enteredPlayerName, setEnteredPlayerName]=useState("");
// const[submitted, setSubmitted]=useState(false);

// function handleChange(event)
// {
//   console.log("yahu")
//   setSubmitted(false);
//   setEnteredPlayerName(event.target.value);
// }

// function handleClick()
// {
//   console.log("lolol")
//   setSubmitted(true);
// }
//   return (
//     <section id="player">
//       <h2>Welcome {submitted? enteredPlayerName:""}</h2>
//       <p>
//         <input type="text" onChange={handleChange} value={enteredPlayerName} />
//         <button onClick={handleClick}>Set Name</button>
//       </p>
//     </section>
//   );
// }


// we can connect refs to JSX Elements
import { useState, useRef } from "react";

export default function Player() {

const playerName = useRef();

const[enteredPlayerName, setEnteredPlayerName]=useState(null);

//using playerName ref and using its current property we can have the JSX Element property like value
function handleClick()
{
  setEnteredPlayerName(playerName.current.value);
  playerName.current.value="";
}
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName? enteredPlayerName:"Dummy value"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}



