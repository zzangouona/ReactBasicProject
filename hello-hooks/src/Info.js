import React, { useState, useEffect, useReducer } from "react";
function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

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
  // const [form, setForm] = useState({
  //   name: "",
  //   nickName: "",
  // });
  //
  // const { name, nickName } = form;
  //
  // useEffect(() => {
  //   //리액트 컴포넌트가 렌더링 될때마다 특정 작업을 수행하도록 설정할 수 있는 Hooks
  //   // 클래스 형의 컴포넌트의 componentDidMount와 componentDidupdate를 합친 형태
  //   console.log("렌더링이 완료되었다.");
  //   console.log(form);
  // });

  // useEffect(() => {
  //   // 마운트만 사용하기
  //   console.log("마운트만 사용하는 방법입니다.");
  // }, []);

  //특정값 값 업데이트
  //componentDidUpdate
  // useEffect(() => {
  //   // 두번째 파라미터에 검사하고 싶은 값을 넣어주면 수정할 수 있다.
  //   console.log(name);
  // }, [name]);

  // useReducer를 사용해서 state 값 바꾸기
  const [state, dispatch] = useReducer(reducer, { name: "", nickName: "" });
  const { name, nickName } = state;

  //뒷정리하기
  //언 마운트되기 전 , 업데이트 직전에 작업 수행시 활용
  useEffect(() => {
    console.log("effect");
    console.log(state);
    return () => {
      console.log("clenup");
      console.log(state);
    };
  });

  // const onChange = (e) => {
  //   const nextForm = {
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   };
  //   setForm(nextForm);
  // };

  const onChange = (e) => {
    dispatch(e.target);
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
