import React from "react";

const MyComponent = (props) => {
  // props.children 은 태그 사이의 값을 보여준다,
  return (
    <div>
      안녕세요, 제이름은 {props.name} 입니다. <br />
      children 값은 {props.children}
    </div>
  );
};

MyComponent.propTypes = {
  name: "기본 이름",
};

export default MyComponent;
