import React, { useState } from "react";

// hooks 사용하기
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>
        {`현재 카운터는 `}
        <b>{count}</b>
        {" 입니다."}
      </p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
};

export default Counter;
