// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line no-unused-vars
function App(props) {
  const a = [];

  //push : 새 값을 배열 맨뒤에 추가
  a.push("흥민");
  a.push("강인");
  a.push("3.14");

  //pop : 맨 뒤의 값을 제거후 리턴

  let val1 = a.pop();
  console.log(val1);
  let val2 = a.pop();
  console.log(val2);

  //map : 각 원소를 다른값으로 매핑후 새배열 리턴
  const b = [5, 4, 3, 2, 1];
  console.log(b);

  function action(param) {
    return param * 2;
  }
  const c = b.map(action);
  console.log(b);
  console.log(c);

  return <div></div>;
}

export default App;
