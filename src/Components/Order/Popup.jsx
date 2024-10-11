// src/Popup.js
import React from 'react';
import './Popup.css'; // for styling

const Popup = ({ trigger, setTrigger, children }) => {
  return trigger ? (
    <div className="popup" onClick={() => setTrigger(false)}>
      <div className="popup-inner" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : null;
};

export default Popup;
