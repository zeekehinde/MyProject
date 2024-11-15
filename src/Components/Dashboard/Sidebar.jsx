import React from "react";
import './Dashboard.css'

const Sidebar = ({ setActiveSection }) => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <button onClick={() => setActiveSection("food")}>Food/Menu</button>
      <button onClick={() => alert("Logging out...")}>Logout</button>
    </div>
  );
};

export default Sidebar;
