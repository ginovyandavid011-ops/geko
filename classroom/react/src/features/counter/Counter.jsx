import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  increment,
  decrement,
  reset,
} from "./counterSlice";

function Counter() {
  const dispatch = useDispatch();

  const count = useSelector(
    (state) => state.counter.value
  );

  return (
    <div>
      <h1>{count}</h1>

      <button
        onClick={() => dispatch(increment())}
      >
        +
      </button>

      <button
        onClick={() => dispatch(decrement())}
      >
        -
      </button>

      <button
        onClick={() => dispatch(reset())}
      >
        reset
      </button>
    </div>
  );
}

export default Counter;