import React, { useState } from 'react';

// 함수형 컴포넌트 useState() 사용해서 state 관리하기
const Say = () => {
  const [message, setMessage] = useState('');

  // 이벤트 변수명은 카멜표기법으로 작성
  // 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수형태의 값을 전달한다.
  // DOM 요소에만 이벤트를 설정할 수 있다. -> ex) <button onClick
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeve = () => setMessage('안녕히 가세요.');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeve}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button
        style={{ color: 'red' }}
        onClick={() => {
          setColor('red');
        }}
      >
        빨간색
      </button>
      <button
        style={{ color: 'blue' }}
        onClick={() => {
          setColor('blue');
        }}
      >
        파란색
      </button>
      <button
        style={{ color: 'green' }}
        onClick={() => {
          setColor('green');
        }}
      >
        초록색
      </button>
    </div>
  );
};

export default Say;
