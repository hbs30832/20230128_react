import { useState } from "react";
import "./App.css";
import Effect from "./component/todos/Effect";

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(!show)}>
        {show ? "언마운트" : "마운트"}
      </button>
      {/* 조건부 렌더링 */}
      {show && <Effect />}
    </>
  );
}

export default App;
