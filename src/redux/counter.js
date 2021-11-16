import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
//import styles from "./Counter.module.css";

export function Counter(props) {
  const itemId = props.itemId;
  const count = useSelector((state) => state.counter.value[itemId]);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          className="btn"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement(itemId))}
        >
          -
        </button>
        <span className="btn">{count ? count : 0}</span>
        <button
          className="btn"
          aria-label="Increment value"
          onClick={() => dispatch(increment(itemId))}
        >
          +
        </button>
      </div>
    </div>
  );
}
