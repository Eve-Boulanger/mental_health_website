import React from "react";
import {AiOutlineArrowLeft} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
import {IconContext} from "react-icons"
import "./Activities.css";

export const Activities = () => {
  return (
    <div className="activities-page">
      <div className="practices-container">
        <div className="header-text">
          <h3>Mental Health Practices</h3>
          <p>There are many different techniques and practices that can be 
            used to improve our overall mental health and well-being. 
            Here are some activities you can start with!</p>
        </div>
          
        
        <div className="body">
          <div className="card">
            <p>Activity #1:</p>
            <p>[Description]</p>
          </div>

          <div className="card">
            <p>Activity #2:</p>
            <p>[Description]</p>
          </div>

          <div className="card">
            <p>Activity #3:</p>
            <p>[Description]</p>
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
            length to allow you to choose the video that would be the 
            most ideal for you in your everyday life. </p>
        </div>
          
        <div className="body">
          <div className="card">
            <p>Activity #1:</p>
            <p>[Description]</p>
          </div>

          <div className="card">
            <p>Activity #2:</p>
            <p>[Description]</p>
          </div>

          <div className="card">
            <p>Activity #3:</p>
            <p>[Description]</p>
          </div>
        </div>
      </div>

      <div className="quizzes-container">
        <div className="header-text">
          <h3>Interactive Quizzes</h3>
          <p>Here are some quizzes you can take to help you learn more about mental health, its practices and its importance!</p>
        </div>
        <div className="body">
          <div className="quizzes-card">
            <div className="quizzes-card-header">
              <IconContext.Provider value={{ style: {fontSize: '30px', color: '#6CB5CB'}}}>
                <div>
                  <AiOutlineArrowLeft />
                </div>
              </IconContext.Provider>
              <div className="quiz-title">
                <p>Quiz #1</p>
                <p>[Description]</p>
              </div>
              <IconContext.Provider value={{ style: {fontSize: '30px', color: '#6CB5CB'}}}>
                <div>
                  <AiOutlineArrowRight/>
                </div>
              </IconContext.Provider>
            </div>

            <embed type="text/html" src="https://stackoverflow.com/questions/59548917/how-do-i-embed-an-external-website-into-my-website" width="500" height="350"/>
          </div>
        </div>
      </div>
    </div>
  );
};