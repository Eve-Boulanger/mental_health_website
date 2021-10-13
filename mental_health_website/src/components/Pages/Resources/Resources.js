import React from "react";
import './css/Resources.css'
import EmergencyContacts from './EmergencyContacts'
import Statistics from './Statistics'
import MythsFacts from "./MythsFacts";
import  Articles from './Articles'


export const Resources = () => {
  return (
    <div className="splitScreen">
      <EmergencyContacts />
      <Statistics />
      <MythsFacts />
      <Articles />
  </div>
  );
};