import { createContext } from "react";
import Todos from "./component/todos/Todos";
import { TodoProvider } from "./context/todos";

// 전역에 공유하고 싶은 값을 전달하는 컨텍스트 생성
//    => 기본값은 Provider 밖에서 useContext했을 때 반환되는 값.
export const CountContext = createContext(0);

function App() {
  // const todos = useTodoState();
  // console.log(todos);
  return (
    <TodoProvider>
      <Todos />
    </TodoProvider>
  );
}

export default App;
