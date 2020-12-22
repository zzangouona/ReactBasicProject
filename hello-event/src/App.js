import './App.css';
import { Component } from 'react';
import Say from './Say';
import EventPractice from './EventPractice';
import EventPracticehooks from './EventPracticehooks';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  // 컴포넌트에 ref 달기
  // 해당 컴포넌트 내부의 메서드 및 멤버 변수에 접근할 수 있다.
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => (this.scrollRef = ref)} />
        <button onClick={() => this.scrollRef.scrollToBottom()}>
          맨 밑으로 이동
        </button>
      </div>
    );
  }
}

export default App;
