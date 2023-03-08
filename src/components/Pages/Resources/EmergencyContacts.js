import React from "react";
import './css/EmergencyContacts.css'
import '../../Styles/GeneralStyles.css'
import thinking from '../../Images/thinking-man.jpg'
import thinking2 from '../../Images/thinking-person.png'
import thinking3 from '../../Images/thinking-person-string.png'
import {Link} from "react-router-dom";

export const EmergencyContacts = () => {
    return(
    <div className="wrapper light-blue-background">
         <div className='row'>
        <div className="column">
            <div className="contacts">
            <h2><span className="black-title title-text">Emergency</span><span className="blue-title title-text"> Support</span></h2>
            <p className="call"><b>Call 211 to be directed to the best resource for you!</b></p>
            <h2><span className="black-title title-text">Talk to Someone</span><span className="blue-title title-text"> in Waterloo</span></h2>
            <ul className="more-contacts">
            <li>Supportive and Confidential Listening (519-745-1166)</li>
              <li>Here 24/7: Addictions, Mental Health and Crisis Services (1-844-437-3247)</li>
              <li>Good2Talk Support Line for Post-secondary Students (1-866-925-5454)</li>
              <li>24-hour Support Line for Sexual Violence Survivors (519-741-8633)</li>
              <li>Mental Health and Community Referral Information (519-744-5594)</li>
            </ul>
            <h2><span className="black-title title-text">Navigate</span><span className="blue-title title-text"> To...</span></h2>
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
        <div className = "navigateTo">
          <div className = "call">
            <a href="#suicidal-thoughts-info"><b className = "navigateToText">Helping Someone With Suicidal Thoughts</b></a>
          </div>
          <div className = "call">
            <a href="#panic-attack"><b className = "navigateToText">Helping Someone Having a Panic Attack</b></a>
          </div>
          <div className = "call">
            <a href="#anxiety-info"><b className = "navigateToText">Helping Someone With Anxiety</b></a>
          </div>
        </div>
    </div>
    );
};

export default EmergencyContacts;