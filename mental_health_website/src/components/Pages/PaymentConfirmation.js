import React from "react";
import verify from "../Pages/img/verify.jpg"
import "./PaymentConfirmation.css";
import {Link} from "react-router-dom";

export const PaymentConfirmation = () => {
    return (
        <div>
            <div className = "thanks">
                <h1>THANK YOU FOR YOUR GENEROUS SUPPORT!</h1>
            </div>
            <div className = "verifyImg">
                <img src={verify} alt="verification"/>
            </div>
            <div className = "processedMessage">
                <h2>YOUR DONATION HAS BEEN PROCESSED.</h2>
            </div>
            <div className = "infoTextBottom">
                <p>Continue to look through our website so learn how to improve your own mental health.</p>
                <p>If you have any more questions or want to learn more visit: <a href="camh.ca">CAMH</a>, <a href="nami.org">NAMI</a>, <a href="cdc.giv">CDC</a>, <a href="who.int">WHO</a></p>
            </div>
        </div>
    );
};