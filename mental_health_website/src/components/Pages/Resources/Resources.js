import React from "react";
import EmergencyContacts from './EmergencyContacts'
import Statistics from './Statistics'
import MythsFacts from "./MythsFacts";
import  Articles from './Articles'


export const Resources = () => {
  return (
    <div>
      <EmergencyContacts />
      <Statistics />
      <MythsFacts />
      <Articles />
  </div>
  );
};