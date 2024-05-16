import React from "react";
import axios from "axios";

function App(props) {
  function handleClickButton1() {
    axios.get("/api/someurl");
  }
  function handleClickButton2() {
    axios.post("/api/someurl");
  }

  function handleClickButton3() {
    axios.get("/api/someurl2");
  }
  function handleClickButton4() {
    axios.post("/api/someurl2");
  }
  function handleClickButton5() {
    const params = new URLSearchParams();
    params.append("id", 3);
    params.append("name", "son");
    params.append("email", "son@son.com");
    // axios.get("/api/someurl3?" + params);
    axios.get(`/api/someurl3?${params}`);
  }
  function handleClickButton6() {
    const params = new URLSearchParams();
    params.append("id", 5);
    params.append("city", "서울");
    params.append("country", "한국");
    axios.post(`/api/someurl3?${params}`);
  }

  function handleClickButton7() {
    const params = new URLSearchParams();
    params.append("id", 19);
    params.append("name", "고양이");
    params.append("age", 3);
    axios.get(`/api/someurl4?${params}`);
  }
  function handleClickButton8() {
    const params = new URLSearchParams();
    params.append("id", 9984);
    params.append("name", "강아지");
    params.append("age", 4);
    axios.post(`/api/someurl4?${params}`);
  }

  return (
    <div>
      <button onClick={handleClickButton1}>get 요청</button>
      <button onClick={handleClickButton2}>post 요청</button>
      <button onClick={handleClickButton3}>method3 요청</button>
      <button onClick={handleClickButton4}>method4 요청</button>
      <button onClick={handleClickButton5}>get 요청 with query string</button>
      <button onClick={handleClickButton6}>post 요청 with data</button>
      <button onClick={handleClickButton7}>get 요청 with query string</button>
      <button onClick={handleClickButton8}>post 요청 with query string</button>
    </div>
  );
}

export default App;
