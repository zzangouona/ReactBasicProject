// 코드 번들링
// 리액트에서 번들러로 주로 웹팩을 사용하는 추세이다.
// 여기서 번들러는 쉽게 이야기하면 import로 모듈을 불러왔을때 불러온 모듈을 모두 합쳐서 하나의 자바스크립트 파일로 묶어는주는 기능이다.
import logo from './logo.svg';
import './App.css';
// 위에 코드를 보면 svg,css 파일을 import 하여 사용하고 있다.
// 이렇게 import 하여 파일을 불러오는 것을 웹팩에서 웹팩의 로더라는 기능이 담당하고 있다.

function App() {
    // 인라인 스타일링
    const name = "리액트";
    const style = {
        // 기존 css 문법을 카멜표기법으로 작성하면된다.
        backgroundColor:"black",
        color:"aqua",
        fontSize:"48px",
        fontWeight:"bold",
        padding:16  // 단위 생략 시 px로 지정
    }
    return <div style={style}>{name}</div>;
 }

export default App;
