import { useState, useEffect } from "react";

export const CountdownTimer = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Countdown Time</h1>
      <p>{seconds} seconds remaining</p>
    </div>
  );
};
