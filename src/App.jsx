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

  return (
    <div>
      <button onClick={handleClickButton1}>get 요청</button>
      <button onClick={handleClickButton2}>post 요청</button>
      <button onClick={handleClickButton3}>method3 요청</button>
      <button onClick={handleClickButton4}>method4 요청</button>
    </div>
  );
}

export default App;
