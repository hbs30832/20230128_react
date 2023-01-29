import "./App.css";
import Hello from "./component/Hello";

function App() {
  return (
    <>
      <Hello title="Seok" color="red" />
      <Hello backgroundColor="yellow" />
      <Hello />
      <Hello>
        <p>자식요소입니다.</p>
      </Hello>
    </>
  );
}

export default App;
