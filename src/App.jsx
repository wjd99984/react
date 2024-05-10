import React from "react";

function App(props) {
  // destructuring assignment
  // (구조)분해 할당

  // object({}, [])를 분해해서 할당
  const a = {
    name: "son",
    age: 33,
  };

  const aName = a.name;
  const aAge = a.age;
  // const { name: aName, age: aAge } = a;

  console.log("aName", aName);
  console.log("aAge", aAge);

  const { name: bName, age: bAge } = a;
  // const bName = a.name;
  // const bAge = a.age;

  console.log("bName", bName);
  console.log("bAge", bAge);

  // 오른쪽항 객체의 프로퍼티명과 할당받는 변수명이 같으면 변수명 생략가능
  // const { name: name, age: age } = a;
  const { name, age } = a;
  console.log("name", name);
  console.log("age", age);

  const car = {
    model: "genesis",
    company: "hyundai",
    price: 500,
  };
  const { model, company, price } = car;
  console.log("model", model);
  console.log("company", company);
  console.log("price", price);

  const house = {
    city: "seoul",
    country: "us",
  };
  const { city, country, area = 987 } = house;
  console.log("city", city);
  console.log("country", country);
  console.log("area", area);

  return <div></div>;
}

export default App;
