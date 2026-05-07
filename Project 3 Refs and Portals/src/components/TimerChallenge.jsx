import { useState, useRef } from "react";
import ResultModal from "./ResultModal";
export default function TimerChallenge({title, targetTime}) {

const timer =useRef();
// const dialog =useRef();

const [timerStarted, setTimerStarted]=useState(false);
const [timerExpired,setTimerExpired]=useState(false);

function handleStart(){

    timer.current=setTimeout(()=>{  // we have store setTimeout in ref
        setTimerExpired(true);
        // dialog.current.showModal(); //standard HTML feature
    }, targetTime*1000);

    setTimerStarted(true);
}

function handleStop(){
    clearTimeout(timer.current);  // we have use that ref using a default function clearTimeout to stop that setTimeout function.
}
  return (
    <>
    {timerExpired && <ResultModal targetTime={targetTime} result="lost"/>}
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime>1?"s":""}
        </p>
        
        <button onClick={timerStarted? handleStop:handleStart}>
            {timerStarted ? "Stop": "Start"} Challenge
        </button>
        
        <p className= {timerStarted ? "active": undefined}>
            {timerStarted ? "Time is running..." : "Timer Inactive" }
        </p>

    </section>
    </>
  );
}
