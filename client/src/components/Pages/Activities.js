import React from "react";
import "../Styles/Activities.css";
import { BsChevronCompactRight } from 'react-icons/bs'
import plant_head from'../Images/plant_head.png';
import launch_background from '../Images/launch_background.jpg'

//Launching Soon Code


export const Activities = () => {
  return (
    <div className = "launching-soon">
      <img src={launch_background} alt="Launch Background Photo"></img>
      <div className = "launching-text">
        <h1>LAUNCHING SOON</h1>
        <p>In the meantime, checkout the Support page and the merchandise we are currently offering!</p>
      </div>
    </div>
  /*
  //UNCOMMENT WHEN DEVELOPMENT STARTS AGAIN
    <div className="activities-page">
      <div className="practices-container">
        <div className="header-text">
          <h1>Mental Health Practices</h1>
          <p>There are many different techniques and practices that can improve our overall mental health and well-being. 
            Here are some activities you can start with!</p>
        </div>
          
        
        <div className="body">
          <div className = "top-row">
            <div className="activities-card">
              <h3>Guide to Meditation</h3>
              <a href="https://www.nytimes.com/guides/well/how-to-meditate" target="_blank" rel="noreferrer">See More<BsChevronCompactRight/></a>
              <p>This New York Times article has lots of information about what meditation is and also has many different guided audio meditations to try!</p>
            </div>

            <div className = "activities-card-imgs">
              <img src={plant_head} alt="Plant Head Right Photo"></img>
            </div>
          </div>

          <div className = "middle-row">
            <div className = "activities-card-imgs">
              <img src={plant_head} alt="Plant Head Right Photo"></img>
            </div>

            <div className="activities-card">
              <h3>Mood Journal Tutorial</h3>
              <a href="https://www.healthline.com/health/how-to-keep-mood-journal#How-to-keep-a-mood-journal" target="_blank" rel="noreferrer">See More<BsChevronCompactRight/></a>
              <p>A mood journal is a great way to help you process and understand your emotions. This article gives instructions on how to start one!</p>
            </div>
          </div>

          <div className = "bottom-row">
            <div className="activities-card">
              <h3>31 Tips to Boost Your Mental Health</h3>
              <a href="https://www.mhanational.org/31-tips-boost-your-mental-health" target="_blank" rel="noreferrer">See More<BsChevronCompactRight/></a>
              <p>Not all suggested mental health practices will work for you so here's a quick list of various things you
                can try to help boost your mood!
              </p>
            </div>

            <div className = "activities-card-imgs">
              <img src={plant_head} alt="Plant Head Right Photo"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="meditation-container">
        <div className="header-text">
          <h1>Meditation Techniques</h1>
          <p>Meditation can help you achieve a mentally clear
            and emotionally calm and stable state. Some guided 
            meditation videos to help you get started can be found below. Each video has a different 
            focus, depending on your need, but all are 10 minutes
            long so they can be easily integrated into your daily routine!</p>
        </div>
          
        <div className="body2"> 
          <div className="meditation-card">
            <iframe src="https://www.youtube.com/embed/ZToicYcHIOU" title="YouTube video player" frameborder="0"></iframe>
            <p>Video 1: Daily Calm Mindfulness Meditation [approx.10 minutes]</p>
          </div>

          <div className="meditation-card">
            <iframe src="https://www.youtube.com/embed/sG7DBA-mgFY" title="YouTube video player" frameborder="0" ></iframe>
            <p>Video 2: Reframe Stress Meditation [approx. 10 minutes]</p>
          </div>

          <div className="meditation-card" >
            <iframe src="https://www.youtube.com/embed/QHkXvPq2pQE" title="YouTube video player" frameborder="0"></iframe>
            <p>Video 3: Decompress Your Body and Mind [approx. 10 minutes]</p>
          </div>
        </div>
      </div>

      <div className="quizzes-container">
        <div className="header-text">
          <h1>Interactive Quizzes</h1>
          <p>Here are some quizzes you can take to help you learn more about mental health, its practices and its importance!</p>
        </div>
        <div className="body2">
          <div className="quizzes-card">
            <h3>CDC - Mental Health Quiz</h3>
            <a href="https://www.cdc.gov/mentalhealth/quiz/index.htm" target="_blank" rel="noreferrer">Take Quiz<BsChevronCompactRight/></a>
            <p>Take this quiz to see if you can distinguish between mental health myths and facts!</p>
          </div>
          <div className="quizzes-card">
            <h3>St John Ambulance - Mental Health Quiz</h3>
            <a href="https://www.sja.org.uk/course-information/guidance-and-help/mental-health-resources/mental-health-quiz/#quiz" target="_blank" rel="noreferrer">Take Quiz<BsChevronCompactRight/></a>
            <p>Take this quiz to test your knowledge about mental health topics!</p>          
          </div>
        </div>
      </div>
    </div>
    */
  );
};
