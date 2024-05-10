import React from "react";

function App(props) {
  function method1() {
    console.log("method1");
  }

  const method2 = function () {
    console.log("method2");
  };

  const method4 = () => console.log("method4");

  return (
    <div>
      {/*각 버튼 클릭하면 콘솔에 띄우기*/}
      <button onClick={method1}>
        click1 onClick property 이름있는 함수 넣기
      </button>
      <button onClick={method2}>
        click2 onClick property 이름없는 함수 변수에 담아서 넣기
      </button>
      <button
        onClick={function () {
          console.log("method3");
        }}
      >
        click3 onClick property 이름없는 함수 바로넣기
      </button>
      <button onClick={method4}>
        click4 onClick property arrow function 변수에 담아서 넣기
      </button>
      <button onClick={() => console.log("method5")}>
        click5 onClick property arrow function 바로넣기
      </button>
    </div>
  );
}

export default App;
