// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line no-unused-vars
function App(props) {
  const a = {
    name: "john",
  };

  const b = a;

  console.log(a == b); //true

  console.log("a.name", a.name);
  console.log("b.name", b.name);

  b.name = "jane";

  console.log("a.name", a.name);
  console.log("b.name", b.name);

  return <div></div>;
}

export default App;
