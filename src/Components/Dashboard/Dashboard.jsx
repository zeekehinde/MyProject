import React, { useState } from "react";
import Sidebar from "./Sidebar";
import FoodSection from "./FoodSection";
import MenuSection from "./MenuSection";
import './Dashboard.css'

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("food");

  return (
    <div className="dashboard">
      <Sidebar setActiveSection={setActiveSection} />
      <div className="main-content">
        {activeSection === "food" ? <FoodSection /> : <MenuSection />}
      </div>
    </div>
  );
};

export default Dashboard;
