import React from "react";
import "./Activities.css";

export const Activities = () => {
  return (
    <div className="activities-page">
      <div className="practices-container">
        <div className="header-text">
          <h1>Mental Health Practices</h1>
          <p>There are many different techniques and practices that can be 
            used to improve our overall mental health and well-being. 
            Here are some activities you can start with!</p>
        </div>
          
        
        <div className="body">
          <div className="activities-card">
            <a href="https://www.nytimes.com/guides/well/how-to-meditate">New York Times - Guide to Meditation</a>
            <p>This article has lots of information and many different guided audio meditations to try!</p>
          </div>

          <div className="activities-card">
            <a href="https://www.healthline.com/health/how-to-keep-mood-journal#How-to-keep-a-mood-journal">Mood Journal Tutorial</a>
            <p>A mood journal is a great way to help you process and understand your emotions. This article gives instructions on how to start one!</p>
          </div>

          <div className="activities-card">
            <a href="https://www.mhanational.org/31-tips-boost-your-mental-health">31 Tips to Boost Your Mental Health</a>
            <p>Not all suggested mental health practices will work for you so here's a quick list of various things you
              can try to help boost your mood!
            </p>
          </div>
        </div>
      </div>

      <div className="meditation-container">
        <div className="header-text">
          <h3>Meditation Techniques</h3>
          <p>Meditation can help you achieve a mentally clear
            and emotionally calm and stable state. Some guided 
            meditation videos to help you get started with this 
            practice can be found below. Each video has a different 
            focus, depending on your need, but all are 10 minutes
            long so it can be easily integrated into your daily routine!</p>
        </div>
          
        <div className="body">
          <div className="meditation-card">
            <p>The video below focuses on Mindfulness Meditation to help you be present in your life.</p>
            <iframe width="250" height="150" src="https://www.youtube.com/embed/ZToicYcHIOU" title="YouTube video player" frameborder="0"></iframe>
          </div>

          <div className="meditation-card">
            <p>The meditation video below is intended to help you learn how to deal with stress by reframing it.</p>
          <iframe width="250" height="150" src="https://www.youtube.com/embed/sG7DBA-mgFY" title="YouTube video player" frameborder="0" ></iframe>
          </div>

          <div className="meditation-card" >
            <p>This video can help declutter all the thoughts in your brain by focusing on resetting the body and mind.</p>
          <iframe width="250" height="150" src="https://www.youtube.com/embed/QHkXvPq2pQE" title="YouTube video player" frameborder="0"></iframe>
          </div>
        </div>
      </div>

      <div className="quizzes-container">
        <div className="header-text">
          <h3>Interactive Quizzes</h3>
          <p>Here are some quizzes you can take to help you learn more about mental health, its practices and its importance!</p>
        </div>
        <div className="body">
          <div className="activities-card">
            <a href="https://www.cdc.gov/mentalhealth/quiz/index.htm">CDC - Mental Health Quiz</a>
            <p>Take this quiz to see if you can distinguish between myths and facts about mental health!</p>
          </div>
          <div className="activities-card">
            <a href="https://www.sja.org.uk/course-information/guidance-and-help/mental-health-resources/mental-health-quiz/#quiz">St John Ambulance - Mental Health Quiz</a>
            <p>Take this quiz to test your knowledge about mental health topics!</p>          
          </div>
        </div>
      </div>
    </div>
  );
};