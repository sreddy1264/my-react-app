import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <p>Count: {count || 0}</p>
      <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
        style={{ marginRight: "5px" }}
      >
        Increase
      </button>
      <button
        onClick={() => setCount((prevCount) => prevCount - 1)}
        style={{ marginLeft: "5px" }}
      >
        decrease
      </button>
    </div>
  );
};
