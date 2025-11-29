import { useState } from "react";
import BinaryToDecimal from "./BinaryToDecimal.jsx";
import DecimalToBinary from "./DecimalToBinary.jsx";

function App() {
  const [mode, setMode] = useState("binary"); 
  

  return (
    <>
      {mode === "binary" ? (
        <>
          <BinaryToDecimal />
          <button onClick={() => setMode("decimal")}>Switch</button>
        </>
      ) : (
        <>
          <DecimalToBinary />
          <button onClick={() => setMode("binary")}>Switch</button>
        </>
      )}
    </>
  );
}

export default App;