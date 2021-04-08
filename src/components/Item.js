import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setIncart] = useState(false);

   function handleCart(){
     setIncart((inCart)=>!inCart)
   }
  return (
    <li className={ inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      onClick={handleCart} 
      className={inCart ? "remove" : "add"}> 
      {inCart ? "remove from" : "add to"} Cart
      </button>
    </li>
  );
}

export default Item;
