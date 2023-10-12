import React from "react";
import { Container} from "react-bootstrap";

import DonateTabs from "../DonateTabs";

import "../Styles/Support.css";

// This page hosts main support page. It displays information regarding the website (top left), donation tabs (top right), and the shop carousel (bottom)
// TODO: fix text, remove split screen, change donation tabs to offer donate & shop options (see Click Up)

export const Support = () => {
  return (
    <Container fluid bsPrefix="container-support"s>
      <div className="donate top-container">
        <h1><span className="color1">Support</span><span className="color2"> now!</span></h1>
        <div className="content-text">
          <h2>Explore Macartney Foundation Merchandise</h2>
          <p>
            Explore the wearable merchandise that The Macartney Foundation has to offer. 
            Check out the <b>patches</b>, <b>pins</b>, and <b>hats</b> below!
            What makes your purchase even more meaningful is that it <b>supports mental health research</b>.
          </p>

          <h2>Supporting a Cause</h2>
          <p>
            When you shop with us, you're not just getting a great product; 
            you're also contributing to an <b>important cause</b>. The Macartney Foundation is 
            dedicated to <b>advancing mental health research and awareness</b>. Your support 
            helps us make a real difference.  
          </p>

          <h2 className="color3">Why Wear Macartney Foundation Apparel?</h2>
          <p>
            These items have been crafted to serve as a symbol of willingness to 
            engage in discussions on mental health. Wearing Macartney merchandise 
            signifies an expression of support and contributes to the elevation 
            of awareness on the matter. The underlying concept is that individuals wearing this 
            merchandise are approachable, ready for conversation, or simply welcoming with a friendly smile.</p>
          <h6><i>Thank you for your support!</i></h6>
        </div>
      </div>
      <div className="bottom-container">
        <DonateTabs/>
      </div>
    </Container>
  );
};