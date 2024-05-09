function App() {
  const name = "흥민";

  const age = age <= 20;
  return (
    <div>
      <p>{name}</p>
      {name == "흥민" && <p>공격수</p>}
      {name == "강인" && <p>미드필더</p>}

      {/*  age 가 20보다 크거나 같으면
    p 투표가능
    작으면 투표불가*/}

      {age >= 20 && <p>투표가능</p>}
      {age <= 20 && <p>투표불가</p>}
    </div>
  );
}

export default App;
