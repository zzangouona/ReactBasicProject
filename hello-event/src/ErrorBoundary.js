import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };
  componentDidCatch(error, errorInfo) {
    // 컴포넌트 처리 도중에 에러가 발생했을때 사용
    // 컴포넌트 자신에게 발생하는 에러는 잡아낼 수 없고 자신의 this.props.children 으로 전달되는 컴포넌트에서 발생하는 에러만 잡아낼 수 있다.
    this.setState({
      error: true,
    });
  }

  render() {
    const { error } = this.state;
    if (error) return <div>에러가 발생했습니다!</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
