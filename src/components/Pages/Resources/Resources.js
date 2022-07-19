import React from "react";
import EmergencyContacts from './EmergencyContacts'
import Statistics from './Statistics'
import MythsFacts from "./MythsFacts"
import  Articles from './Articles'
import  SuicidalThoughtsInfo from './SuicidalThoughtsInfo'
import  PanicAttackInfo from './PanicAttackInfo'
import AnxietyInfo from './AnxietyInfo'

export const Resources = () => {
  return (
    <div>
      <EmergencyContacts />
      <MythsFacts />
      <SuicidalThoughtsInfo />
      <PanicAttackInfo />
      <AnxietyInfo />
      <Statistics />
      <Articles />
  </div>
  );
};