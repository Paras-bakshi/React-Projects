import {createPortal} from "react-dom";



export default function ResultModal({ result, targetTime}) {
  return createPortal(
    <dialog className="result-modal" open>
        <h2>you {result}</h2>
        <p>The target time was<strong>{targetTime} seconds</strong></p>
        <form method="dialog">
            <button>Close</button>
        </form>
    </dialog>,
    document.getElementById("modal")
  )
}
