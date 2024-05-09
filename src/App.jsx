function MyComponent() {
  //최상위 컴포넌트 사용하지 않을떄 -> fragment 사용
  <>
    return <p>Lorem ipsum.</p>
    <p>Porro, quis!</p>
  </>;
}
function MyComp() {
  // 최상위 컴포넌트는 1개임
  return (
    <div>
      <p>Lorem ipsum.</p>
      <p>Asperiores, nulla.</p>
    </div>
  );
}

function MyTag() {
  //jsx 코드가 여러줄일떄 괄호 표시
  // 한줄일때는 사용안해도됨
  return (
    <div>
      hello tag
      <p>Lorem ipsum.</p>
      <p>Est, guos?</p>
    </div>
  );
}

function App() {
  return (
    <div>
      hello react
      <MyComp />
      <MyTag />
      <MyComponent />
    </div>
  );
}
export default App;
