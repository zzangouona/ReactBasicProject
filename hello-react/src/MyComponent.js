import React from "react";
import PropTypes from "prop-types";

// propTypes을 통한 props 검증
const MyComponent = ({ name, children, favoriteNumber }) => {
  // props.children 은 태그 사이의 값을 보여준다,
  return (
    <div>
      안녕세요, 제이름은 {name} 입니다. <br />
      저의 나이는 {favoriteNumber} <br />
      children 값은 {children}
    </div>
  );
};

MyComponent.defaultPropes = {
  name: "기본 이름",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
