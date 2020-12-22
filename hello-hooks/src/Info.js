import React, { useState, useEffect } from "react";

const Info = () => {
  // useState 여러번 사용해서 state 값 바꾸기
  // const [name, setName] = useState("");
  // const [nickName, setNickName] = useState("");
  //
  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };
  // const onChangeNickName = (e) => {
  //   setNickName(e.target.value);
  // };

  //useStete 하나로 값 바꾸기 -> form
  const [form, setForm] = useState({
    name: "",
    nickName: "",
  });

  const { name, nickName } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
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

export default Info;
