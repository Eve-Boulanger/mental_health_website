import React from "react";
import "../Styles/Home.css";
import "../Styles/GeneralStyles.css";
import brain from'../Pages/img/brainExerciseBlue.jpg';
import {Link} from "react-router-dom";
import donate from'../Pages/img/donate.png';

export const Home = () => {
  return (
    <div class="wrapper">
      <div class = "light-blue-background">
        <div class = "row">
          <div class = "header-text-column">
            <h1><span class = "blue-title title-text">PRIORITIZE</span><span class = "black-title title-text"> MENTAL HEALTH.</span></h1> 
            <h1><span class = "blue-title title-text">BREAK THE</span><span class = "black-title title-text"> STIGMA.</span></h1>
            <h1><span class = "blue-title title-text">ASK FOR</span><span class = "black-title title-text"> HELP.</span></h1> 
            <h1><span class = "blue-title title-text">PROGRESS</span><span class = "black-title title-text"> OVER PERFECTION.</span></h1>
          </div>
          <div class = "header-else-column">
            <div class = "header-image">
              <img src={brain} alt="brain exercise"/>
            </div>
          </div>
        </div>
        <div class = "dark-blue-background row">
          <div class = "header-text-column">
          <h2 class="black-title"><b>About</b></h2>
            <p>Welcome to WEBSITE NAME! This page gives students a platform to work on their 
              mental health. More resources will be launching soon including resources for helping
              someone who is having a mental health challenge, techniques for improving mental health, 
              and additional resources you can investigate. Mental health is just as important as physical health. 
              If you have the flu, you see a doctor, so if you are feeling mentally 
              unwell you seek professional help. Practicing mental health is important 
              for everyone.</p>
            <p>This website was created to promote positive mental health practices, 
              raise awareness about the topic, and fundraise for mental health 
              research. Hats, patches and pins are being provided by the Macartney Foundation. 
              Wearing these accessories shows that you supports positive mental 
              health. This merchandise aims to start the necessary conversation on 
              mental health.</p>
          </div>
          <div class = "button-homepage">
            <div class = "donate-now">
              <form action = "/support">
                <button type = "submit">
                  Shop Merchandise!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className = "row dark-green-background">
        <div className = "content-box light-green-background">
        <h2 class="title-text">Resources</h2>
        <p>There are a number of free mental health resources available in the community. This page outlines hotline numbers as well as information about mental health services.</p>
          <Link to="/resources"><button class = "underline light-green-background">
            Read More.
          </button>
          </Link>
        </div>

        <div className = "content-box">
        <h2 className = "title-text">Activities</h2>
        <p>Exercise your mind with meditation, daily reflection, and positive thinking.</p>
          <Link to="/activities"><button class="underline dark-green-background">
            Read More.
          </button>
          </Link>
        </div>

        <div className = "content-box light-green-background">
        <h2 className = "title-text">Support</h2>
        <p>All proceeds are donated to mental health research as well as to provide money to students who require mental health resources beyond those that are free through the university.</p>
        <Link to="/support"><button class="underline light-green-background">
          Read More.
        </button>
        </Link>
        </div>

      </div>
    </div>
  );
};