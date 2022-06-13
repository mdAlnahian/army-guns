import "./Guns.css";
import React, { useEffect, useState } from "react";
import Gun from "./Gun";
import Modal from "react-modal";
import Navbar from "../Navbar/Navbar";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");



const Guns = () => {
  const [guns, setGuns] = useState([]);
  const [cart , setCart] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

   function openModal() {
     setIsOpen(true);
   }

   function closeModal() {
      setIsOpen(false);
    }

  useEffect(() => {
    // console.log('useEffect');
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

   const handleAddToCart = (gun) => {
    const newCart = [...cart , gun]
    //  console.log(gun);
    // console.log(newCart);
    setCart(newCart)
   };



  return (
    <div>
      <Navbar openModal={openModal} cart={cart}></Navbar>
      <div className="all-guns">
        {/* <button onClick={openModal}>Open Modal</button> */}

        <div className="all-guns-container">
          {guns.map((gun) => (
            <Gun key={gun.id} gun={gun} handleAddToCart={handleAddToCart}></Gun>
          ))}
        </div>
        <div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <button onClick={closeModal}>X</button>
            <div>
              {cart.map((item) => (
                <span key={item.id} className="cart-item">
                  <img src={item.img} className="cart-item-image" alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                </span>
                // <h2 key={item.id}>{item.name}</h2>
              ))}
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Guns;
