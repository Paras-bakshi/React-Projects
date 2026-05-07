import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux";
import { counterActions } from '../store';
const Counter = () => {

  const dispatch=useDispatch();

  const counter=useSelector((state)=> state.counter);
  const show=useSelector((state)=>state.showCounter)

  const incrementHandler=()=>{
    // dispatch({type:"increment"});
    dispatch(counterActions.increment());

  };
  const decrementHandler=()=>{
    // dispatch({type:"decrement"});
    dispatch(counterActions.decrement());
  }

  const IncreaseHandler=()=>{
    // dispatch({type:"increase", amount:5});
    dispatch(counterActions.increase(5));
  }

  

  const toggleCounterHandler = () => {
    // dispatch({type:"toggle"})
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={IncreaseHandler}>Increase by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
