import { useEffect, useState } from "react";

// component/todos/Effect.jsx
function Effect() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // useEffect() : 생명주기에 따라서 실행될 사이드 이펙트(부수효과)를 콜백함수로 전달한다.
  // 의존성 배열을 전달하지 않았을 때 : 렌더링 이후에 실행된다.
  useEffect(() => {
    console.log("렌더링");
  });

  // 의존성 배열이 비었을 때 : 화면에 처음 나타날 때 한번만 실행된다.
  //    => 초기값 설정할 때, 라이브러리 연동, setTimeout 등
  useEffect(() => {
    console.log("마운트");

    // 뒷정리(cleanup) 함수 : 라이브리리 연동 해제, 스케줄 취소 등.
    return () => {
      console.log("언마운트");
    };
  }, []);

  // 의존성 배열에 전달된 값이 변경되었을 때만 실행.
  useEffect(() => {
    // 변경된 후 실행
    console.log(count);

    // 변경 직전에 실행 => 값이 변경되어 다음 렌더링되지 직전.
    return () => console.log(count);
  }, [count]);

  console.log("render");

  return (
    <div>
      <h1>useEffect</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <div>
        <h2>{input}</h2>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
      </div>
    </div>
  );
}

export default Effect;
