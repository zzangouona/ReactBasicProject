
// 코드 번들링
// 리액트에서 번들러로 주로 웹팩을 사용하는 추세이다.
// 여기서 번들러는 쉽게 이야기하면 import로 모듈을 불러왔을때 불러온 모듈을 모두 합쳐서 하나의 자바스크립트 파일로 묶어는주는 기능이다.
import logo from './logo.svg';
import './App.css';
// 위에 코드를 보면 svg,css 파일을 import 하여 사용하고 있다.
// 이렇게 import 하여 파일을 불러오는 것을 웹팩에서 웹팩의 로더라는 기능이 담당하고 있다.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
