import React from "react";
import './css/PanicAttackInfo.css'

export const PanicAttackInfo = () => {
    return(
      <div className="wrapperPanicAttack">
      <div className="panic-attack-info-content">
        <h1 className="dark-title-emg-panicattack-h1">Helping Someone Who is Having a Panic Attack</h1>
        
        <div classNme="full-container-top">
          <div className ="container-box-3">
            <h3 className="info-title-panicattack">What are the signs of a panic attack?</h3>
            <ul className="useful-bullets-4">
              <li>Shortness of breath</li>
              <li>Feelings of terror or dread</li>
              <li>Shaking and dizziness</li>
              <li>Heart palpitations</li>
              <li>Feeling as though one is dying</li>
              <li>Rapid heart rate</li>
              <li>Sweating, trembling, or shaking</li>
              <li>Feeling sick of nauseated</li>
              <li>Loss of control</li>
              <li>A sense of impending danger</li>
              <li>Chest pain and stomach cramps</li>
              <li>Light-headedness or faintness</li>
            </ul>
          </div>

          <div className = "container-box-3">
            <h3 className="info-title-panicattack">Grounding Techniques</h3>
            <ul className="useful-bullets-4">
              <li><span className="bold-italic-txt">Sit down</span> – keep the feet comfortably on the floor and focus on slowly breathing in and out</li>
              <li><span className="bold-italic-txt">5-4-3-2-1 technique</span> – get the person to focus their attention on different senses. Ask the individual to identify 5 items they see, 4 things they feel, 3 noises they hear, 2 different smells, and 1 taste </li>
              <li><span className="bold-italic-txt">Simple math</span> – count from 1 to 10 out of order o perform simple math calculations such as times tables</li>
              <li><span className="bold-italic-txt">Focus</span> – ask the person what day of the week it is, who they are with, and where they are</li>

            </ul>
          </div>
        </div>

        <div className = "container-box-4">
          <h2 className="dark-title-emg-h2">How can I help someone who is having a panic attack?</h2>
          <h3 className="info-title-panicattack-subheading">Helping Someone During a Panic Attack</h3>
          <ul className="useful-bullets-5">
              <li>Stay with the person and keep calm</li>
              <li>Ask if the person thinks they are having a panic attack and ask if they have had one before - this may remind them about a previous attack and how they recovered</li>
                  <div className="subbullets-panic-attack">
                    <li>Ask if the person usually takes medication during an attack and ask if they would like to take it</li>
                    <li>Do not say “calm down”, “don’t worry”, or “try to relax” as this could worsen symptoms</li>
                  </div> 
              <li>Ask what the person needs and do not assume you know what is best for them</li>
              <li>Let the person know that they do not have to stay where they are</li>
              <li>Speak in short simple sentences while staying positive and non-judgmental</li>
              <li>Be predictable in your actions when around the person</li>
              <li>Help to slow the person’s breathing by breathing with them or by counting slowly to 10</li>
                  <div className="subbullets-panic-attack">
                    <li>Do not give them a paper bag to breath in and out of because this could cause them to faint</li>
                  </div>
              <li>Have a friendly conversation to distract the person from their symptoms and recognize that they do not necessarily have to respond with anything more than a nod or head shake</li>
              <li>Here are some phrases that may help:</li>
                  <div className="subbullets-panic-attack">
                    <li>“Concentrate on your breathing.”</li>
                    <li>“What you are feeling is scary, but it is not dangerous.”</li>
                    <li>“Tell me what you need.”</li>
                  </div>
              <li>Understand that it is alright to be anxious yourself but remain calm on the surface</li>
          </ul>
          <h3 className="info-title-panicattack-subheading">Helping Someone Recover</h3>
          <ul className="useful-bullets-5">
              <li>Continue to support and engage with the individual to ease stress and potentially embarrassment</li>
              <li>Encourage the person to go to therapy at their own pace</li>
              <li>If you have an existing relationship with the person:</li>
                  <div className="subbullets-panic-attack">
                    <li>Be very patient and praise any effort towards recovery</li>
                    <li>Do not agree to help the person avoid things or situations that cause anxiety</li>
                    <li>Remember to take care of yourself and set healthy boundaries by encouraging the person to reach out to a therapist as another pillar of support</li>
                  </div>  
          </ul>
        </div>
      </div>
    </div>
    );
};

export default PanicAttackInfo;