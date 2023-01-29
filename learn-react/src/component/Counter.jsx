import { useState } from "react";

function Counter() {
  /* 
    useState() : 상태값을 만드는 훅.
        => 첫번째 인자는 초기값.
        => 반환값 배열 [상태값, 업데이트 함수]
        => 업데이트 함수를 실행시키면 전달된 인자가 새로운 상태가 된다.
        => 상태가 업데이트 자동으로 렌더링이 다시 일어난다.
   */

  const [count, setCount] = useState(0);

  const handleCount = () => {
    /* 
        업데이트 함수는 비동기적으로 동작한다.
            => 함수형 업데이트를 하면 동기적으로 동작한다.
            => 콜백함수의 첫번째 인자로 최신 상태값이 전달된다.
            => useCallback의 의존성을 제거하는데 효과적이다.
    */
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      {/* 이벤트바인딩 함수를 값으로 전달해야한다(함수 호출 x) */}
      <button onClick={handleCount}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default Counter;
