import React, { useCallback, useMemo, useState } from "react";

// useMemo
const getAverage = (numbers) => {
  console.log("평균값 계산중입니다.");
  if (!numbers || !numbers.length) return 0;
  const sumNumbers = numbers.reduce((sum, num) => sum + num.value, 0);
  return sumNumbers / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  // useCallback으로 최적화하기
  // 함수 표현식으로 선언한 함수는 컴포넌트가 리렌더링될때마다 이 함수들이 새로 생성된다. -> 최적화 방법 useCallback
  // useCallback의 첫번째 파라미터는 생성하고 싶은 함수를 넣고, 두번째 파라미터는 배열을 넣는다
  // 이 배열에는 어떤값이 바뀌었을때 함수를 새로 생성해야하는 명시해향한다.
  // 함수 내부에서 상태 값에 의존해야할 때는 그 값을 반드시 두번재 파라미터 안에 포함시켜 주어야한다.

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수생성

  const onInsert = useCallback(() => {
    const nextList = list.concat({ id: list.length, value: Number(number) });
    setList(nextList);
    setNumber("");
  }, [number, list]); //number, list가 바뀌었을대만 함수 생성

  const onKeyPress = (e) => {
    if (e.key === "Enter") onInsert();
  };

  const avg = useMemo(() => getAverage(list), [list]);
  //렌더링 과정에서 특정값이 바뀌었을때만 함수가 실행하게 한다.
  return (
    <div>
      <input
        name={"number"}
        value={number}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onInsert}>등록</button>
      <br />
      <ul>
        {list.map((data) => {
          return <li key={data.id}>{data.value}</li>;
        })}
      </ul>
      <div>
        <b>평균값: </b>
        {avg}
      </div>
    </div>
  );
};

export default Average;
