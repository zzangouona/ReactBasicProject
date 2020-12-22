import React, { useState } from 'react';
// 컴포넌트 반복
const IterationSample = () => {
  // input 만들어서 컴포넌트 반복하기
  // 데이터 추가하기
  // 리스트를 더블클릭하면 해당 리스트 삭제
  const [inputText, setInputText] = useState('');
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);
  const nameList = names.map((names, index) => (
    <li
      onDoubleClick={() => {
        onRemove(names.id);
      }}
      key={names.id}
    >
      {names.text}
    </li>
  ));

  const onRemove = (id) => {
    // filter를 사용해서기 해당 데이터 삭제
    const nextNames = names.filter((data) => data.id != id);
    setNames(nextNames);
  };

  const onChangeText = (e) => {
    setInputText(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key == 'Enter') {
      onClick();
    }
  };
  const onClick = (e) => {
    // 변수로 처리하기
    const nextNames = names.concat({ id: names.length + 1, text: inputText });
    setNames(nextNames);
    //setNames([...names, { id: names.length + 1, text: inputText }]);
    setInputText('');
  };
  return (
    <div>
      <input
        type={'text'}
        name={'inputText'}
        value={inputText}
        onChange={onChangeText}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>추가하기</button>
      <br />
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
