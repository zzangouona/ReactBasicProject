import React from "react";
import classNames from "classnames/bind";
import styles from "./CSSMoule.module.css";

const cx = classNames.bind(styles); // 미리 클래스를 받아오도록 설정한다.
const CSSModule = () => {
  return (
    // 클래스가 여러개 생길 경우
    //<div className={`${styles.wrapper} ${styles.inverted}`}>
    // calssnames 의 bind 함수로 처리한 경우
    <div className={cx("wrapper", "inverted")}>
      안녕하세요 저는 <span className={"something"}>CSS Module!</span>
    </div>
  );
};

export default CSSModule;
