import React from "react";
import './css/Statistics.css';
import stats_1 from '../../Images/stats_1.jpg';
import stats_2 from '../../Images/stats_2.jpg';
import stats_3 from '../../Images/stats_3.jpg';
import Infographic from "./Infographic";

export const Statistics = () => {
    return(
        <div className="secondRow">
            <div className="header">
            <h1>Statistics on Mental Health</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            Donec dictum tincidunt vulputate. Ut vitae sapien in est luctus luctus. In vitae bibendum orci. Nulla euismod lacinia augue, sed accumsan elit. Vestibulum 
            in leo pretium, molestie sem eu, imperdiet lacus. 
            </p>
            </div>
            <div className="grid-container">
                <div className="grid-item">
                    <Infographic img={stats_1} dialog="dialogLeft" expand="left-info" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="grid-item">
                    <Infographic img={stats_2}  dialog="dialogCenter" expand="center-info"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="grid-item">
                    <Infographic img={stats_3} dialog="dialogRight" expand="right-info"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;