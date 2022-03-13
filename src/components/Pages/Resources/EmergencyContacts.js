import React from "react";
import './css/EmergencyContacts.css'
import thinking from '../../Images/thinking.png'

export const EmergencyContacts = () => {
    return(
    <div className="wrapper">
         <div className='row'>
        <div className="column">
            <div className="contacts">
            <h2 className="title-emg">Emergency Support</h2>
            <p className="call"><b>Call 211 to direct you to the best resource for you!</b></p>
            <h2 className="title-emg">Talk to Someone in Waterloo</h2>
            <ul className="more-contacts">
            <li>Supportive and Confidential Listening (519-745-1166)</li>
              <li>Here 24/7: Addictions, Mental Health and Crisis Services (1-844-437-3247)</li>
              <li>Good2Talk Support Line for Post-secondary Students (1-866-925-5454)</li>
              <li>24-hour Support Line for Sexual Violence Survivors (519-741-8633)</li>
              <li>Mental Health and Community Referral Information (519-744-5594)</li>
            </ul>
            </div>
        </div>
        <div className="column">
            <div className="parent">
                <img className="img1-emergency" src={thinking} alt="Thinking Head" />
            </div>
          </div>
        </div>
    </div>
    );
};

export default EmergencyContacts;