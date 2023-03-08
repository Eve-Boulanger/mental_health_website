import React from "react";
import "../Styles/Home.css";
import "../Styles/GeneralStyles.css";
import brain from'../Pages/img/brainExerciseBlue.jpg';
import {Link} from "react-router-dom";
import donate from'../Pages/img/donate.png';

export const Home = () => {
  return (
    <div>
      <div class = "row light-blue-background">
        <div class = "column">
          <h1><span class = "blue-title title-text">PRIORITIZE</span><span class = "black-title title-text"> MENTAL HEALTH.</span></h1> 
          <h1><span class = "blue-title title-text">BREAK THE</span><span class = "black-title title-text"> STIGMA.</span></h1>
          <h1><span class = "blue-title title-text">ASK FOR</span><span class = "black-title title-text"> HELP.</span></h1> 
          <h1><span class = "blue-title title-text">PROGRESS</span><span class = "black-title title-text"> OVER PERFECTION.</span></h1>
        </div>
        <div class = "column">
          <div class = "header-image">
            <img src={brain} alt="brain exercise"/>
          </div>
        </div>
        <div class = "aboutContainerHome">
          <h2>About</h2>
          <p>Welcome to YouWaterloo! This page gives students a platform to work on their mental health. Mental health is just as important as physical health. If you have the flu, you see a doctor, so if you are feeling mentally unwell you seek professional help no matter how big or small the problem. Practicing mental health is important for everyone, just as we exercise our bodies we need to exercise our minds.</p>
          <p><span class = "bold">This website was created to promote positive mental health practices, raise awareness about the topic, and fundraise for mental health research and for students who are in need of mental health resources beyond those that are free through the university.</span> Hats, patches and pins are being provided by the Macartney Foundation. The Macartney accesories were created by a University of Waterloo student who lost his father at a young age due to a mental illness. These accessories are a symbol that you are open to talk about mental health or that you need someone to talk to. Wearing these symbols supports positive mental health in the community and starts the conversation. Break down the stigma and take control of mental health by donating, practicing the outlined activities or just reading up on the subject.</p>
        </div>
        <div class = "donateButtonHome">
          <div class = "donateButtonHomeBUTTON">
            <Link to="/support"><button>
                DONATE NOW <img src={donate} alt="donate hand icon"/>
              </button>
            </Link>
          </div>
          <p> Donate to support mental health research and help students in need. </p>
        </div>
      </div>

      <div className = "middleAndBackTextHome">
        <h2>Activities</h2>
        <p>Exercise your mind with meditation, daily reflection, and positive thinking.</p>
        <div class = "readMoreMiddle">
          <Link to="/activities"><button>
            Read More.
          </button>
          </Link>
        </div>
      </div>
      <div className = "leftTextHome">
        <h2>Resources</h2>
        <p>There are a number of free mental health resources available in the community. This page outlines hotline numbers as well as information about mental health services.</p>
        <div class = "readMoreLeft">
          <Link to="/resources"><button>
            Read More.
          </button>
          </Link>
        </div>
      </div>
      <div className = "rightTextHome">
        <h2>Support</h2>
        <p>All proceeds are donated to mental health research as well as to provide money to students who require mental health resources beyond those that are free through the university.</p>
        <div class = "readMoreRight">
          <Link to="/support"><button>
            Read More.
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};