import React from "react";
import './css/EmergencyContacts.css'
import thinking from '../../Images/thinking.png'
import strength_msg from '../../Images/strength_msg.png'

export const EmergencyContacts = () => {
    return(
    <div className="wrapper">
         <div className='row'>
        <div className="column">
            <div className="contacts">
            <h2>Emergency Support</h2>
            <p>Call 211 to direct you to the best resource for you!</p>
            <h2>Talk to Someone in Waterloo</h2>
            <ul>
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
                <img className="img1" src={thinking} alt="Thinking Head" />
                <img className="img2" src={strength_msg} alt="Strength Message" />
            </div>
          </div>
        </div>
    </div>
    );
};

export default EmergencyContacts;