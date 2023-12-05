
import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  return (
    <button
      onClick={handleClick}
      style={{ background: isOn ? "green" : "red", color: "white", padding: "5px 10px", cursor: "pointer" }}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default Toggle;
