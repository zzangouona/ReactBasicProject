import './App.css';
import { Component } from 'react';
import Say from './Say';
import EventPractice from './EventPractice';
import EventPracticehooks from './EventPracticehooks';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';

class App extends Component {
  // 라이프 사이클 해보기
  state = {
    color: '#000000',
  };
  getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  handleClick = () => {
    this.setState({
      color: this.getRandomColor(),
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }
}

export default App;
