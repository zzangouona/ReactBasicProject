import React, { useState } from 'react';

//함수형 컴포넌트로 이벤트 처리하기
const EventPracticehooks = () => {
  // const [message, setMessage] = useState('');
  // const [username, setUserName] = useState('');
  // const onChangeMessage = (e) => setMessage(e.target.value);
  // const onChangeUserName = (e) => setUserName(e.target.value);

  // input 다수 일 경우 처리
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, // 기존 form 내용을 복사
      [e.target.name]: e.target.value, // 원하는 값 덮어씌우기
    };
    setForm(nextForm);
  };
  const onClick = (e) => {
    alert(`현재 데이터는 username = ${username}, message = ${message}`);
    setForm({
      username: '',
      message: '',
    });
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
        onChange={onChange}
      />
      <br />
      <input
        name="message"
        placeholder="메세지를 입력하세요."
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <br />
      <button onClick={onClick}>지우기</button>
    </div>
  );
};

export default EventPracticehooks;
