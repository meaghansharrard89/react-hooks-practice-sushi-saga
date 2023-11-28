import React, { useState } from "react";

function Sushi( { sushi, handleClick } ) {
  const { name, img_url, price } = sushi;
  const [isNotEaten, setIsClicked] = useState(false);

  function handleSushiClick(){
    setIsClicked((isNotEaten) => !isNotEaten);
    const currentPrice = sushi.price;
    handleClick(currentPrice);
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClick}>
        {isNotEaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
