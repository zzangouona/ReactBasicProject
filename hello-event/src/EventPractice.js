import React, { Component } from 'react';

// react 이벤트
// onChange 이벤트 핸들링하기
class EventPractice extends Component {
  state = {
    message: '',
  };

  // 이벤트 하드코딩으로 테스트해보기
  render() {
    const { message } = this.state;
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          value={message}
          placeholder="아무거나 입력해 보세요."
          onChange={(e) => {
            this.setState({
              message: e.target.value,
            });
          }}
        />
        <button
          onClick={() => {
            alert('현재 글자는 => ' + message);
            this.setState({
              message: '',
            });
          }}
        >
          지우기
        </button>
      </div>
    );
  }
}

export default EventPractice;
