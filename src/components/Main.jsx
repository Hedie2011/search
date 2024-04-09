import { useState } from "react";

function Main() {
  const [count, setCount] = useState(0);
  return (
    <main>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </main>
  );
}
export default Main;
