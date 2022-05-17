import { Component } from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import classes from "./Counter.module.css";

import {counterActions} from '../store/counter-store-toolkit';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const incrementHandler = () => {
    dispatch({ type: "increment", value: 3});
    //dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement", value: 3 });
    //dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    //dispatch(counterActions.increase(5)); // { type:SOME_UNIQUE_IDENTIFIER, payload:5} -> it internally pass to actions 
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increment by 5</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};
export default Counter;//it is for function component

// class Counter extends Component {

//   incrementHandler = () => {
//     this.props.increment();
//   };

//   decrementHandler = () => {
//     this.props.decrement();
//   };

//   render() {
//     return (
//       <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <button onClick={this.incrementHandler}>Increment</button>
//       <button onClick={this.decrementHandler}>Decrement</button>
//     </main>
//     )
 
//   }
// }


// const mapStateToProps = (state) => {
//   return {
//     counter : state.counter
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: ()=> dispatch({ type: "increment", value: 3}),
//     decrement: ()=> dispatch({ type: "decrement", value: 3}),
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
