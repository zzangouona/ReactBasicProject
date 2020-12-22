import React from 'react';
// 컴포넌트 반복
const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  // 컴포넌트를 반복할때는 key를 넣어줘야한다.
  // key 값을 설정할 때는 언제나 유일한 값이여야한다.
  // index를 key 값으로 하는 것은 안 좋다.
  const nameList = names.map((names, index) => <li key={index}>{names}</li>);
  return <ul>{nameList}</ul>;
};

export default IterationSample;
