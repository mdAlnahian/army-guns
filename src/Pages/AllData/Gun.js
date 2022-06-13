import './Gun.css'
import React from 'react';

const Gun = ({ gun, handleAddToCart }) => {
  // console.log(gun);
  const { name,  img, bullet, capacity, category, price } = gun;

  // const handleAddToCart =()=>{
  //     console.log("Add to Cart");
  // }

  return (
    <div className="gun-container">
      <img className="gun-img" src={img} alt="" />
      <h2 className="">{name}</h2>
      <h4 className="marge-zero">Bullet : {bullet}</h4>
      <h4 className="marge-zero">Gun Capacity : {capacity}</h4>
      <h3 className="marge-zero">Catagory : {category}</h3>
      <h3 className="padding-hero">Price : ${price}</h3>
      <button onClick={() => handleAddToCart(gun)} className="cart-button">
        ADD TO CART 🤍
      </button>
    </div>
  );
};

export default Gun;