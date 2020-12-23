import React, { useMemo, useState } from "react";

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

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onInsert = () => {
    const nextList = list.concat({ id: list.length, value: Number(number) });
    setList(nextList);
    setNumber("");
  };

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
