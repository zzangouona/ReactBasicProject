import React, { Component } from "react";

class Counter extends Component {
  // state constructor 에서 꺼내기
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // state를 조회할 때느 this. state을 조회한다.
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 {fixedNumber}</h2>
        <button
          //onClick을 통해 버튼이 클릭되었을 때 호ㅜㄹ할 함수를 지정
          onClick={() => {
            //this.setState을 사용하여 state 새로운 값을 할당한다.
            //setState 후 특정 작업 실행
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("방금 setState가 호출 되었다.");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
