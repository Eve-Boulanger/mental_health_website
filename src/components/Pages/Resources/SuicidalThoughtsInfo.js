import React from "react";
import './css/SuicidalThoughtsInfo.css'
import thinking from '../../Images/thinking.png'

export const SuicidalThoughtsInfo = () => {
    return(
    <div className="wrapperSuicidalThoughts">
      <div className="suicidal-thoughts-info-content">
        <h1 className="dark-title-emg">Helping Someone With Suicidal Thoughts</h1>
        <div className = "container-box-1">
          <h2 className="dark-title-emg-h2">How can I tell if someone is having suicidal thoughts?</h2>
          <h3 className="info-title">IS PATH WARM</h3>
          <ul className="useful-bullets-1">
              <li>I - Ideation: Talk or threats to harm oneself</li>
              <li>S - Substances: Increased substance use</li>
              <li>P - Purposelessness: feelings of having no sense of purpose in life</li>
              <li>A - Anxiety: feeling of intense anxiety</li>
              <li>T - Trapped: Feelings of being trapped</li>
              <li>H - Hopelessness: Feelings of helplessness or hopelessness for the future</li>
              <li>W - Withdrawal: avoiding friends, family and society</li>
              <li>A - Anger: feelings of agitation or uncontrolled anger</li>
              <li>R - Recklessness: Acting recklessly or acting in risky activities without thinking</li>
              <li>M - Mood change: Dramatic mood changes</li>
          </ul>
          <h3 className="info-title">Additional Signs</h3>
          <ul className="useful-bullets-2">
              <li>Looking for ways to harm oneself</li>
              <li>Talking or writing about death, dying or suicide</li>
              <li>Unable to sleep or sleeping all of the time</li>
          </ul>
        </div>


        <div className = "container-box-2">
          <h2 className="dark-title-emg-h2">How can I help someone who is having suicidal thoughts?</h2>
          <h3 className="info-title">Immediate Help</h3>
          <ul className="useful-bullets-2">
              <li>If someone is in immediate danger call 911</li>
              <li>If you are able to do so safely, take them to the nearest hospital</li>
              <li>Call the emergency helplines listed <span href=".wrapper">above</span></li>
          </ul>
          <h3 className="info-title">Gradual Active Help</h3>
          <ul className="useful-bullets-2">
              <li>Let the person talk and take as much time as they need</li>
              <li>Take the person seriously and listen without judgement, even if you do not understand, their feelings are real</li>
              <li>Keep your word, do not make promises to them that you can not keep</li>
              <li>Tell the person that they are important and that you care about them</li>
              <li>If the person is already seeking professional help it is important that they tell their health care team about their suicidal thoughts</li>
              <li>If the person is not seeking professional help yet then give them the local crisis helpline number and encourage them to talk to a therapist or other professional</li>
              <li>Ask if the person has a plan and depending on their answer you ay want to limit their access to lethal means such as medication, knives, or firearms</li>
              <li>Ask the person to rate their suicidal thoughts out of 10 and continue to ask this overtime to assess if the situation is getting worse</li>
              <li>Make a safety plan with the person</li>
                  <div className="subbullets-make-a-plan">
                  <li>Who will they call if their feelings get stronger?</li>
                  <li>Who can stay with them to keep them safe?</li>
                  <li>Make a list of phone numbers of people and services they can call if they feel unsafe</li>
                  </div>
              <li>Avoid leaving the person alone if they are in crisis</li>
              <li>Seek support for yourself and ensure that your mental health is being taken care of by speaking to a therapist, joining a support group, or taking time for yourself</li>
          </ul>
        </div>
      </div>
    </div>
    );
};

export default SuicidalThoughtsInfo;