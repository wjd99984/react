import React, { useState } from "react";

function App(props) {
  // input에 입력된 값이 p에 출력되도록 코드 작성

  const [text, setText] = useState("");
  function catUpdateText(e) {
    setText(e.target.value);
  }
  return (
    <div>
      <input type="text" onChange={catUpdateText} />
      <p>{text}</p>
    </div>
  );
}

export default App;
