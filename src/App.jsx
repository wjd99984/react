import React, { useState } from "react";
import axios from "axios";

function App(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function handleClick1() {
    const obj1 = { name: "son", age: 44 };
    // const json1 = JSON.stringify(obj1);

    // axios가 두번째 파라미터가 객체면 직렬화 해줌
    axios.post("/api/main41/sub1", obj1);
  }

  function handleClick2() {
    const obj2 = {
      name: ["고양이", "강아지", "오리"],
      text: ["야옹", "멍멍", "꽥꽥"],
    };

    axios.post("/api/main41/sub2", obj2);
  }

  function handleClick3() {
    axios.post("/api/main41/sub3", { name, age });
  }

  return (
    <div>
      <button onClick={handleClick1}>요청(json 데이터 포함)</button>
      <button onClick={handleClick2}>요청(json 데이터 포함)</button>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      <input type="text" onChange={(e) => setAge(e.target.value)} />
      <br />
      <button onClick={handleClick3}>요청 (input 에 입력한값)</button>
    </div>
  );
}

export default App;
