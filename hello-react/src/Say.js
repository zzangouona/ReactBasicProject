import React, { useState } from "react";

// 함수형 컴포넌트 useState() 사용해서 state 관리하기
const Say = () => {
  const [message, setMessage] = useState("");
  // 배열 비구조 할당
  // 아래와 같은 의미
  // const stringState = useState("");
  // const message = stringState[0];
  // const setMessage = stringState[1];

  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeve = () => setMessage("안녕히 가세요.");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeve}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button
        style={{ color: "red" }}
        onClick={() => {
          setColor("red");
        }}
      >
        빨간색
      </button>
      <button
        style={{ color: "blue" }}
        onClick={() => {
          setColor("blue");
        }}
      >
        파란색
      </button>
      <button
        style={{ color: "green" }}
        onClick={() => {
          setColor("green");
        }}
      >
        초록색
      </button>
    </div>
  );
};

export default Say;
