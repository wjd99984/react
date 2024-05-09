function someMethod() {
  return "hello js";
}

function someMethod2(param) {
  return param + " " + param;
}

function App() {
  const a = 5;
  const b = 9;

  return (
    <>
      <div>
        {/* <p> 5 X 9 = 45 </p> */}
        <p>
          {a}*{b} = {a * b}
        </p>
        <p>{someMethod()}</p> {/* hello js */}
        <p>{someMethod2("react")}</p> {/* react react */}
      </div>
    </>
  );
}

export default App;
