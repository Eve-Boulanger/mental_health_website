import React from "react";
import '../../Styles/Resources.css'
import '../../Styles/GeneralStyles.css'
import thinking from '../../Images/thinking-man.jpg'
import thinking2 from '../../Images/thinking-person.png'
import thinking3 from '../../Images/thinking-person-string.png'
import {Link} from "react-router-dom";

export const EmergencyContacts = () => {
    return(
    <div className="wrapper light-blue-background">
        <div className="row">
          <div className="column">
            <h2><span className="black-title title-text">Emergency</span><span className="blue-title title-text"> Support</span></h2>
            <p><span className="bold">Call 211 to be directed to the best resource for you!</span></p>
            <h2><span className="black-title title-text">Talk to Someone</span><span className="blue-title title-text"> in Waterloo</span></h2>
            <ul>
                <li>Supportive and Confidential Listening (519-745-1166)</li>
                    <li>Here 24/7: Addictions, Mental Health and Crisis Services (1-844-437-3247)</li>
                    <li>Good2Talk Support Line for Post-secondary Students (1-866-925-5454)</li>
                    <li>24-hour Support Line for Sexual Violence Survivors (519-741-8633)</li>
                    <li>Mental Health and Community Referral Information (519-744-5594)</li>
                </ul>
            <h2><span className="black-title title-text">Navigate</span><span className="blue-title title-text"> To...</span></h2>
            <div className = "bold navigateTo">
                <a href="#suicidal-thoughts-info">Helping Someone With Suicidal Thoughts</a>
                <a href="#panic-attack">Helping Someone Having a Panic Attack</a>
                <a href="#anxiety-info">Helping Someone With Anxiety</a>
            </div>
          </div>
          <div className="column img1-emergency">
            <img src={thinking3} alt="Thinking 3" />
            <img src={thinking} alt="Thinking 1" />
            <img src={thinking2} alt="Thinking 2" />
          </div>
        </div>
    </div>
    );
};

export default EmergencyContacts;