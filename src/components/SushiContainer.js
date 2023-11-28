import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer( {sushi, handleClick} ) {
  const [displaySushi, setDisplaySushi] = useState(0);

  //number of sushi to display at a time
  const sushiPerPage = 4;

  //calculate the range of sushi to display based on current index
  const startSushi = displaySushi * sushiPerPage;
  const endSushi = startSushi + sushiPerPage;

  //use slice to get sushi from current range
  const firstFourSushi = sushi.slice(startSushi, endSushi);

  //handle button click to display next sushi
  const handleMoreButtonClick = () => {
    setDisplaySushi((prevSushi) => prevSushi + 1);
  }

  return (
    <div className="belt">
      {firstFourSushi.map((item) => <Sushi key={item.id} sushi={item}handleClick={handleClick}/>)}
      <MoreButton onClick={handleMoreButtonClick}/>
    </div>
  );
}

export default SushiContainer;
