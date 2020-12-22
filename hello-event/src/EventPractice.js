import React, { Component } from 'react';

// react 이벤트
// onChange 이벤트 핸들링하기
class EventPractice extends Component {
  state = {
    message: '',
  };

  // 이벤트 하드코딩으로 처리
  // 이벤트에 함수 형태로 처리

  // 생성자에서 메서드 바인딩하기
  constructor(props) {
    super(props);
    // 함수가 호출될때 this는 호출부에 따라 결정되므로, 클래스의 임의 메서드가 특정 html 요소의 이벤트로 등록되는 과정에서 메서드와 this의 관계를 끊어져 버린다.
    // 따라서 임의 메서드가 이벤트로 등록되어도 this를 컴포넌트 자신으로 제대로 가리키기 위해서는 메서드를 this와 바인딩하는 ㅏㅈㄱ업이 필요
    // 바인딩하지 않으면 this가 undefined를 가르킨다.
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleClick(e) {
    alert('현재 글자는 => ' + this.state.message);
    this.setState({
      message: '',
    });
  }

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
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>지우기</button>
      </div>
    );
  }
}

export default EventPractice;
