import React from "react";
import './css/EmergencyContacts.css'
import thinking from '../../Images/thinking-man.jpg'
import thinking2 from '../../Images/thinking-person.png'
import thinking3 from '../../Images/thinking-person-string.png'

export const EmergencyContacts = () => {
    return(
    <div className="wrapper">
         <div className='row'>
        <div className="column">
            <div className="contacts">
            <h2><span className="black-title-emg">Emergency</span><span className="blue-title-emg"> Support</span></h2>
            <p className="call"><b>Call 211 to direct you to the best resource for you!</b></p>
            <h2><span className="black-title-emg">Talk to Someone</span><span className="blue-title-emg"> in Waterloo</span></h2>
            <ul className="more-contacts">
            <li>Supportive and Confidential Listening (519-745-1166)</li>
              <li>Here 24/7: Addictions, Mental Health and Crisis Services (1-844-437-3247)</li>
              <li>Good2Talk Support Line for Post-secondary Students (1-866-925-5454)</li>
              <li>24-hour Support Line for Sexual Violence Survivors (519-741-8633)</li>
              <li>Mental Health and Community Referral Information (519-744-5594)</li>
            </ul>
            <h2><span className="black-title-emg">Navigate</span><span className="blue-title-emg"> To...</span></h2>
            </div>
        </div>
        <div className="column">
            <div className="parent">
                <img className="img1-emergency" src={thinking3} alt="Thinking 3" />
                <img className="img1-emergency" src={thinking} alt="Thinking 1" />
                <img className="img1-emergency" src={thinking2} alt="Thinking 2" />
            </div>
          </div>
        </div>
        <div className = "navButtonsContainer">
              <button className = "navButtons" href="#idName"> Helping Someone With Suicidal Thoughts </button>
              <button className = "navButtons" href="#idName"> Helping Someone Having a Panic Attack </button>
              <button className = "navButtons" href="#idName"> Helping Someone With Anxiety </button>
        </div>
    </div>
    );
};

export default EmergencyContacts;