/* 웹 팩을 통해 번들링(통합) 될 파일들 선언 */
// 번들링 시에는 웹 팩에 포함되어 있는 바벨이라는 도구를 통해
// ES6 문법이 하ES5 문법으로 변환된다.(위 브라우저 호환을 위함)
// node_modules 폴더에 다운로드 된 리액트를 불러와서 실행할 수 있게 한다.
import React, { Component } from "react";
// 사용하고자 하는 이미지 파일 불러오기
import logo from "./logo.svg";
import MyComponent from "./MyComponent";
// 사용하고자 하는 스타일시트 가져오기
import "./App.css";
// 클래스형 컴포넌트 만들기
class App extends Component {
  // 클래스 형 컴포넌트에서는 render() 가 무조건 필요하다.
  render() {
    const name = "리액트";
    return <MyComponent />;
  }
}

export default App;
