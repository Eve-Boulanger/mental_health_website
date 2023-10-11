import React from "react";
import "./css/LaunchingSoonPlaceholder.css";
import launch_background from '../../Images/launch_background.jpg'


export const LaunchingSoonPlaceholder = () => {
  return (
    <div className = "launching-soon">
      <img src={launch_background} alt="Launch Background Photo"></img>
      <div className = "launching-text">
        <h1>LAUNCHING SOON</h1>
        <p>In the meantime, checkout the Support page and the merchandise we are currently offering!</p>
      </div>
    </div>
  );
};
export default LaunchingSoonPlaceholder;