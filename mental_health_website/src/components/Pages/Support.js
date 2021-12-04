import React from "react";
import DonateTabs from "../DonateTabs";
import {MyCart} from "../MyCart";
import "./Support.css";
import { Container, Row } from "react-bootstrap";

export const Support = () => {
  return (
    <Container fluid bsPrefix="container-support">
      <Row>
      <div className="donate top-container">
        <div className="left">
          <h1><span className="color1">Donate</span><span className="color2"> now!</span></h1>
          <div className="content-text">
            <h2>Why donate?</h2>
            <p>
              [Name of website] is a fundraising effort by the <b>University of Waterloo 
              Engineers without Borders Design Portfolio </b>, which aims to advocate for 
              mental health and help facilitate access to mental healthcare resources 
              for students from the University of Waterloo. Your donation is greatly 
              appreciated and will directly aid students within our community!
            </p>

            <h2>Where does the money go?</h2>
            <p>
              <b>50% of all donations will go to support mental health research</b> conducted
              by [the organization that the macartney foundation donates to] 
            </p>
            <p>
              <b>50% of all donations will directly fund a grant for students</b> from the 
              University of Waterloo in need of mental health treatments and services
              such as counseling, medication, and therapy.
            </p>

            <h2 className="color3">Looking for more ways to help?</h2>
            <p>
              [Name of the website] has partnered with the <b>Macartney Foundation</b> to
              further help raise awareness surrounding mental illness. Please consider
              supporting the Macartney foundation by purchasing <b>patches, pins,</b> and <b>hats</b> below!
            </p>
            <h6><i>Thank you for your support!</i></h6>
          </div>
        </div>
        <div className="right">
          <DonateTabs/>
        </div>
      </div>
      </Row>

      <div className="merch">
        <MyCart />
      </div>
    </Container>
  );
};