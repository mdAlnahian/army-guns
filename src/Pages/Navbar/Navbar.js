import './Navbar.css'
import React from 'react';

const Navbar = ({openModal , cart }) => {
    return (
      // <div className='nav-container'>
      <nav className="nav_bar">
        <div>
          <h3>ARMY GUNS</h3>
        </div>
        <div>
          <h3 className='cart-icon' onClick={openModal}> 🤍({cart.length})</h3>
        </div>
      </nav>
      // </div>
    );
};

export default Navbar;