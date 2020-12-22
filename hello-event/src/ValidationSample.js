import React, { Component } from 'react';
import './ValidationSample.css';

// ref 사용해보기
class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  // ref을 사용하는 기준은 DOM을 직접적으로 건들어야하는 경우,
  // react는 ref 사용하지 않고도 state을 변경가능하다.

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleButtonClick = (e) => {
    console.log(this.state.password);
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    this.input.focus();
  };

  render() {
    const { password, clicked, validated } = this.state;
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          name={'password'}
          type={'password'}
          value={password}
          onChange={this.handleChange}
          className={clicked ? (validated ? 'success' : 'failure') : ''}
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
