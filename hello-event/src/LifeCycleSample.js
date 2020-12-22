import React, { Component } from 'react';

// 라이프 사이클 메서드 사용하기
class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };
  myRef = null; //ref 설정

  constructor(props) {
    super(props);
    // state 설정
    // 생성자
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    // props 로 받아 온 값을 state에 동기화할 때 사용하는 라이프 사이클
    if (nextProps.color !== prevState.color) {
      console.log('pops 값을 state에 동기화 시킵니다.');
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    // 첫 렌더링을 마친 후 실행
    // 프레임워크 함수 호출 이벤트 등록, SetTimeout, setInterval, 네트워크 요청 같은 비동기 작업 처리
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    // 숫자의 마지막 자리가 4면 리렌더링 하지 않는다.
    // props 또는 state 을 변경했을때 리렌더링을 시작할지 여부를 지정하는 메서드
    // 메서드는 만드시 false 또는 true 반환( default true)
    // false 를 반환한다면 업데이트 중지 -> 서능 최적화할때 알고리즘로 false를 반환
    // 현재 props, state -> this.props, this.state
    // 새로 설졍될 props, state -> nextProps, nextState
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    // Dom 제거시 실행
    // 등록한 이벤트, 타이버 등 제거 작업할 때 활용
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        number: prevState.number + 1,
      };
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    // render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출
    // componentDidUpdate 에서 snapshot으로 전달 받을 수 있다.
    // 주로 스크롤바 위치 유지 및 업데이트하기 직저의 값을 참고할 때 활용
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
    // 리렌더링 완료 후 실행
    // 이전에 가졌던 props, state 접근 가능 -> prevProps, prevState
    // getSnapshotBeforeUpdate 에서 반환한 값이 있다면 여기서 snapshot 값으로 전달 가
    if (snapshot) {
      console.log('업데이트되기직전 색상 : ', snapshot);
    }
  }

  render() {
    console.log('render');
    const style = {
      color: this.props.color,
    };
    const { number, color } = this.state;
    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {number}
        </h1>
        <p>color: {color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
