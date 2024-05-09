// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line no-unused-vars
function App(props) {
  const son = {
    firstName: "john",
    lastName: "Doe",
    address: "127.0.0.1",
    country: "us",
    married: "false",
  };
  return (
    <div>
      {/* obj의 각 프로퍼티를 jsx 내에서 출력하는 코드 작성 */}
      <ul>
        <li>성 : {son.firstName}</li>
        <li>이름 : {son.lastName}</li>
        <li>주소 : {son.address}</li>
        <li>국가 : {son.country}</li>
        <li>결혼여부 : {son.married}</li>
      </ul>
    </div>
  );
}

export default App;
