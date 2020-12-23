import React, { useState, useEffect, useReducer } from "react";
import useInput from "./useInput";

// 커스텀 hooks 만들기
const InfoCustom = () => {
  const [state, onChange] = useInput({ name: "", nickName: "" });
  const { name, nickName } = state;
  return (
    <div>
      <input
        type={"text"}
        name={"name"}
        value={name}
        placeholder={"이름을 입력하세요."}
        onChange={onChange}
      />
      <input
        type={"text"}
        name={"nickName"}
        value={nickName}
        placeholder={"별명을 입력하세요."}
        onChange={onChange}
      />
      <br />
      <h1>
        <b>이름: </b> {name}
      </h1>
      <h1>
        <b>닉네임: </b> {nickName}
      </h1>
    </div>
  );
};

export default InfoCustom;
