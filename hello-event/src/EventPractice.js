import React, { Component } from 'react';

// react 이벤트
// onChange 이벤트 핸들링하기
class EventPractice extends Component {
  state = {
    message: '',
    username: '',
  };

  // 이벤트 하드코딩으로 처리
  // 이벤트에 함수 형태로 처리

  // 생성자에서 메서드 바인딩하기
  // constructor(props) {
  //   super(props);
  //   // 함수가 호출될때 this는 호출부에 따라 결정되므로, 클래스의 임의 메서드가 특정 html 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계를 끊어져 버린다.
  //   // 따라서 임의 메서드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로 가리키기 위해서는 메서드를 this와 바인딩하는 ㅏㅈㄱ업이 필요
  //   // 바인딩하지 않으면 this가 undefined를 가르킨다.
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // 화살표 함수를 사용하면 생성자에서 메서드 바인딩 하지 않아도 된다.
  // input이 여러개 일 경우 setState 처리
  // name 을 사용해서 처리한다.
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    alert(
      `현재 데이터는 username = ${this.state.username}, message = ${this.state.message}`,
    );
    this.setState({
      message: '',
      username: '',
    });
  };

  // onKeyPress 이벤트 핸들링
  // Enter를 눌렀을 때 Event
  handleKeypress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    const { message, username } = this.state;
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={username}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          name="message"
          value={message}
          placeholder="아무거나 입력해 보세요."
          onChange={this.handleChange}
          onKeyPress={this.handleKeypress}
        />
        <br />
        <button onClick={this.handleClick}>지우기</button>
      </div>
    );
  }
}

export default EventPractice;
