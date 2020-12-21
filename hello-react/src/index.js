import React from 'react';
//리액트를 불러와 사용  > node_module 폴터에 react 모듈 설치되어 있음
// 모듈을 불러와서 사용하는 것은 브라우저에서 진행하는 것이 아니라 Node.js에서 지원하는 기능이다. -> Node.js import = require 로 패키지 불러오기 가능
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
