import React from "react";
import axios from "axios";

function App(props) {
  function handleClick1() {
    axios.get("/path1");
  }

  function handleClick2() {
    const params = new URLSearchParams();
    params.append("city", "서울");
    params.append("address", "신촌");
    axios.get(`/path2?${params.toString()}`);
  }

  function handleClick3() {
    const params = new URLSearchParams();
    params.append("name", "흥민");
    params.append("age", 44);

    axios.get(`/path3?${params.toString()}`);
  }

  function handleClick2() {
    const qs = "name=son&age=33&city=서울";
    axios.get("/path?" + qs);
  }

  function handleClick3() {
    const qs = new URLSearchParams();
    qs.append("name", "흥민");
    qs.append("age", "33");
    qs.append("country", "한국");
    axios.get("/path3?" + qs.toString());
  }
  return (
    <div>
      <div>
        <button onClick={handleClick1}>/path1 get 요청</button>
      </div>
      <div>
        <button onClick={handleClick2}>
          /path2 get 요청, city,address 요청 파라미터 첨부
        </button>
      </div>
      <button onClick={handleClick3}>
        /path3 get 요청, name,age 요청 파라미터 첨부
      </button>
    </div>
  );
}

export default App;
