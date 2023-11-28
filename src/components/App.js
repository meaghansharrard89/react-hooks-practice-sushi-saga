import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const budget = 50;
  const [sushi, setSushi] = useState([])
  const [remainingMoney, setRemainingMoney] = useState(budget)

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
    .then((res) => res.json())
    .then((data) => setSushi(data))
  }, [])

  function eatSushi(sush){
    if (!sush.eaten && (sush.price <= remainingMoney)) {
      setRemainingMoney(remainingMoney - sush.price) 
      setSushi(sushi.map(roll => 
        roll.id !== sush.id
        ? roll: {...roll, eaten:true}
      ))
    }
    else {return null}
  }

  return (
    <div className="app">
      <SushiContainer 
        sushi={sushi} 
        eatSushi={eatSushi} 
        />
      <Table plates={sushi.filter(sushi => sushi.eaten)}
        remainingMoney={remainingMoney}
      />
    </div>
  );
}

export default App;