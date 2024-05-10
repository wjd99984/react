import React from "react";

function App(props) {
  //나머지 모두 문법으로 객체복사
  const a = {
    name: "son",
    age: 33,
    city: "london",
  };
  const b = a;
  b.age = 44;
  console.log(b.age); //44
  console.log(a.age); //44

  const c = {
    name: a.name,
    age: a.age,
    city: a.city,
  };
  c.age = 55;
  console.log(c.age); //55
  console.log(a.age); //44

  //객체의 각 프로퍼티 복사
  const { ...d } = a;

  d.age = 66;
  console.log(d.age);
  console.log(a.age);

  const e = {
    name: "lee",
    country: "korea",
    team: "paris",
    salary: 700,
    city: "seoul",
  };
  const { ...f } = e;
  e.city = "busan";

  console.log(e);
  console.log(f);
  return <div></div>;
}

export default App;
