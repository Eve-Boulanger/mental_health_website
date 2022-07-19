import React from "react";
import './css/AnxietyInfo.css'

export const AnxietyInfo = () => {
    return(
      <div className="wrapper-anxiety-info">
      <div className="anxiety-info-content">
        <h1 className="dark-title-emg-anxiety-info-h1">Helping Someone Who is Having a Panic Attack</h1>
        
        <div classNme="full-container-top-anxiety">
          <div className ="container-box-3-left-anxiety">
            <h3 className="info-title-anxiety">What are the signs of a panic attack?</h3>
            <ul className="useful-bullets-4-anxiety">
              <li>Light headedness</li>
              <li>Sweating</li>
              <li>Feeling restless</li>
              <li>Shortness of breath</li>
              <li>Diarrhea</li>
              <li>Easily fatigued</li>
              <li>Avoidance of feared situations</li>
              <li>Seeking reassurance</li>
              <li>Constantly second-guessing decisions</li>
              <li>Irritable/frustrated in feared situations</li>
              <li>Acting compulsively</li>
            </ul>
          </div>

          <div className = "container-box-3-right-anxiety">
          <div className="info-title-anxiety-top">
            <h3 className="info-title-anxiety">What does an anxious thought look like?</h3>
            <ul className="useful-bullets-4-anxiety">
              <li>Believing the worst will happen</li>
              <li>Persistent worrying</li>
              <li>All-or-nothing thinking</li>
              <li>Overgeneralizing</li>
            </ul>
          </div>
          <div className="info-title-anxiety-bottom">
            <h3 className="info-title-anxiety">What are treatment options for anxiety?</h3>
            <ul className="useful-bullets-4-anxiety">
              <li><span className="bold-italic-txt">Cognitive behavioural therapy (CBT)</span> - learning how to lower anxiety and face anxiety causing situations</li>
              <li><span className="bold-italic-txt">Medication</span> - antidepressants which are most effective when used in combination with CBT</li>
            </ul>
          </div>
          </div>
        </div>

        <div className = "container-box-4-anxiety">
          <h2 className="dark-title-emg-h2-anxiety">How Can I Help Someone With Anxiety?</h2>
          <ul className="useful-bullets-5-anxiety">
              <li>Do not enable but do not force confrontation: over time, 
                continual avoidance of difficult situations causes anxiety to 
                grow but do not push someone who is not ready to face their anxiety. 
                The best option is to partner with a professional therapist who can 
                help empower the person as a third party and someone with experience.</li>
              <li>Provide validation: what makes one person feel anxious may be no big deal 
                to someone else, so it is important to understand that what the person is 
                experiencing is real and requires sensitivity. Avoid saying things such as: 
                “I don’t understand why you are getting so upset over this small thing.”</li>
              <li>Express concern: if you notice that someone is exhibiting different 
                behaviour or avoiding certain situations, acknowledge that you have noticed 
                these situations and ask them if they want to talk about it. 
                Depending on how the conversation goes, you may suggest that it might be 
                beneficial to seek professional help or support in coping with their anxiety.</li>
              <li>Ask: ask the person what you can do to help, if you are very close to 
                the person you can ask to attend a therapy session with them to learn 
                skills to support them better.</li>
              <li>Encourage the person to find a good fit: often times, 
                the first therapist that a person sees may not always be the best fit. 
                Encourage the person to try again or go see a new therapist and ensure 
                that they do not get discouraged. </li>
              <li>Remember to take care of yourself and set healthy boundaries by encouraging 
                the person to reach out to a therapist as another pillar of support</li>
          </ul>
        </div>
      </div>
    </div>
    );
};

export default AnxietyInfo;