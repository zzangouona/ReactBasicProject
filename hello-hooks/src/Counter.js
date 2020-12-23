import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
// hooks 사용하기
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //useReducer
  // usestate 보다 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 사용하는 Hook
  // 리듀서는 현재 상태 그리고 업데이트를 위해 필요한 정보를 담은 액션값을 전달받아 새로운 상태를 반환하는 함수
  // state 현재 상태값, dispatch 액션을 발새시키는 함수
  // 함수 안에 파라미터로 액션값을 넣주면 리듀서 함수가 호출되는 구조어
  // useReducer 의 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다.

  return (
    <div>
      <p>
        {`현재 카운터는 `}
        <b>{state.count}</b>
        {" 입니다."}
      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
