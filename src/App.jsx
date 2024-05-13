import React from "react";

const nameList = ["손", "박", "이", "차", "황", "김"];

function App(props) {
  const [index, setIndex] = React.useState(0);
  const name = nameList[index];

  return (
    <div>
      <button onClick={() => setIndex(index - 1)}>이전</button>

      <button onClick={() => setIndex(index + 1)}>다음</button>

      <div>{name}</div>
    </div>
  );
}

export default App;
