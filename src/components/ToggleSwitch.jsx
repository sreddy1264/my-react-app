import { useState } from "react";

export const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>
    </div>
  );
};
