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
            <a href="https://www.nytimes.com/guides/well/how-to-meditate">New York Times - Guide to Meditation</a>
            <p>This article has lots of information and many different guided audio meditations to try!</p>
          </div>

          <div className="card">
            <a href="https://www.healthline.com/health/how-to-keep-mood-journal#How-to-keep-a-mood-journal">Mood Journal Tutorial</a>
            <p>A mood journal is a great way to help you process and understand your emotions. This article gives instructions on how to start one!</p>
          </div>

          <div className="card">
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
          <div className="card">
          <iframe width="250" height="150" src="https://www.youtube.com/embed/ZToicYcHIOU" title="YouTube video player" frameborder="0"></iframe>
          </div>

          <div className="card">
          <iframe width="250" height="150" src="https://www.youtube.com/embed/sG7DBA-mgFY" title="YouTube video player" frameborder="0" ></iframe>
          </div>

          <div className="card">
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

            <iframe title="quiz" width="350" height="350" class='rid_2f12047e_351377' data-apiroot='//tools.cdc.gov/api' data-mediatype='html' data-mediaid='351377' data-stripscripts='true' data-stripanchors='false' data-stripimages='false' data-stripcomments='true' data-stripstyles='true' data-cssclasses='syndicate' data-ids='' data-xpath='' data-oe='utf-8' data-of='xhtml' data-ns='cdc' data-postprocess='' data-nw='true' data-iframe='true' data-cdc-widget='syndicationIframe' data-apiembedsrc='//tools.cdc.gov/api/embed/html/js/embed-2.0.3.js' data-iframeembedsrc='//tools.cdc.gov/TemplatePackage/contrib/widgets/tp-widget-external-loader.js' data-font=''></iframe><script src='//tools.cdc.gov/TemplatePackage/contrib/widgets/tp-widget-external-loader.js' ></script><noscript>You need javascript enabled to view this content or go to <a href='//tools.cdc.gov/api/v2/resources/media/351377/noscript'>source URL</a>.</noscript>
          </div>
        </div>
      </div>
    </div>
  );
};