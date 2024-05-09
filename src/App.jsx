function MyComponent() {
  return <div>hello component</div>;
}

function MyComp() {
  //jsx 코드: <div></div>

  const myElem = <h1>hi jsx</h1>;

  return myElem;
}

function App() {
  //component 사용시 종료태그를 생략할수가 없음
  // br 같은 빈요소는 시작태그에서 꼭 종료

  return (
    <>
      <div>
        {/*{주석처리}*/}
        {/*단축키 ctrl + / */}
        <h1>hello react</h1>
        <h2>하이 리액트</h2>
        <h3>안녕 리액트</h3>
        <p>Lorem ipsum dolor.</p>
        <MyComponent />
        <MyComp />
      </div>
    </>
  );
}
export default App;
