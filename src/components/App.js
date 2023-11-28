import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [remainingMoney, setRemainingMoney] = useState(50)

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
    .then((res) => res.json())
    .then((data) => setSushi(data))
  }, [])

  function handleClick(currentPrice){
    setRemainingMoney((remainingMoney) => {
      if (remainingMoney > 0) {
        return remainingMoney - currentPrice;
      } else {
        alert("You've used all your money!");
        return remainingMoney;
      }
    })}

  return (
    <div className="app">
      <SushiContainer sushi={sushi} handleClick={handleClick}/>
      <Table remainingMoney={remainingMoney} />
    </div>
  );
}

export default App;