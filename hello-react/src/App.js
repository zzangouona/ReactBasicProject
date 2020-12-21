// 코드 번들링
// 리액트에서 번들러로 주로 웹팩을 사용하는 추세이다.
// 여기서 번들러는 쉽게 이야기하면 import로 모듈을 불러왔을때 불러온 모듈을 모두 합쳐서 하나의 자바스크립트 파일로 묶어는주는 기능이다.
import logo from './logo.svg';
import './App.css';
// 위에 코드를 보면 svg,css 파일을 import 하여 사용하고 있다.
// 이렇게 import 하여 파일을 불러오는 것을 웹팩에서 웹팩의 로더라는 기능이 담당하고 있다.

function App() {
    // ES6 변수
    const name = "정윤아";
    // var 는 scope 단위가 함수 단위이다. 그리고 const, let은 스코프가 블록단위이다.
    // var 보다 const 와 let을 사용하자!
    // 기본적으로 const를 사용하고 해당값을 바꿔야할 경우 let을 사용하자.
    return (
        <>
            {/* And 연산자(&&)를 사용한 조건부 렌더링 */}
            {name === "정윤아" && <h1>{name} 안녕!</h1>}
            {/*
                true 일 경우 해당 렌더링을 할 수 있지만 false 일 경우 null이기에 화면에 아무것도 나타나지 않는다.
            */}
            <h2>잘 작동하니?</h2>
        </>
    );
}

export default App;
