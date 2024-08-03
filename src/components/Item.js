import React, { useState } from "react";

function Item({ name, category }) {
  const [item, setItem] = useState(0);

  function  handleClick(){
    setItem("in-cart")
  }

  return (
    <li className={item}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>Add to Cart</button>
    </li>
    //{item ? "Remove from Cart" : "Add to Cart"}
  );
}

export default Item;
