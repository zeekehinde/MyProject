import React, { useState } from "react";
import './Dashboard.css'

const MenuSection = () => {
  const [menuItems, setMenuItems] = useState([]);

  const handleUploadMenu = () => {
    const newMenu = prompt("Enter menu item:");
    if (newMenu) {
      setMenuItems([...menuItems, newMenu]);
    }
  };

  return (
    <div className="menu-section">
      <h3>Menu Items</h3>
      <ul>
        {menuItems.length === 0 ? (
          <p>No menu items uploaded yet.</p>
        ) : (
          menuItems.map((menu, index) => <li key={index}>{menu}</li>)
        )}
      </ul>

      <button onClick={handleUploadMenu}>Upload Menu</button>
    </div>
  );
};

export default MenuSection;
