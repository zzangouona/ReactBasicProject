import React, { useState } from 'react';

//함수형 컴포넌트로 이벤트 처리하기
const EventPracticehooks = () => {
  const [message, setMessage] = useState('');
  const [username, setUserName] = useState('');
  const onChangeMessage = (e) => setMessage(e.target.value);
  const onChangeUserName = (e) => setUserName(e.target.value);

  const onClick = (e) => {
    alert(`현재 데이터는 username = ${username}, message = ${message}`);
    setUserName('');
    setMessage('');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
    <div>
      <input
        name="username"
        placeholder="사용자명을 입력하세요."
        value={username}
        onChange={onChangeUserName}
      />
      <br />
      <input
        name="message"
        placeholder="메세지를 입력하세요."
        value={message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
      />
      <br />
      <button onClick={onClick}>지우기</button>
    </div>
  );
};

export default EventPracticehooks;
