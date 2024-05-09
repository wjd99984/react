function MyNav() {
  return (
    <>
      (<a href="#">link</a> <a href="#">link2</a>);
    </>
  );
}

function MyFooter() {
  return (
    <ul>
      <li>link1</li>
      <li>link2</li>
    </ul>
  );
}

function MyHeader() {
  return (
    <div>
      <h1> hello header</h1>
      <h3> hello sub header</h3>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyHeader />
      {/*
    <div>
      <h1> hello header </h1>
      <h3> hello sub header </h3>
    </div>
    */}
      <MyFooter />
      {/*
      <ul>
        <li>link1</li>
        <li>link2</li>
      </ul>
    */}
      <MyNav />
      {/*
       <a href="#">link 1</a>
       <a href="#">link 2</a>
       */}
    </div>
  );
}
export default App;
