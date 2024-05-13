import React, { useState } from "react";

function App(props) {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  function catClick() {
    const [...nextList] = list;
    nextList.push(text);
    setList(nextList);
    setText("");
  }

  return (
    <div>
      <input
        value={text}
        type="text"
        onChange={(event) => setText(event.target.value)}
      />
      <button onClick={catClick}>추가</button>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
