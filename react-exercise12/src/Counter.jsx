import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={decrement} disabled={count === 0}>
        Decrement
      </button>

      <button onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default Counter;