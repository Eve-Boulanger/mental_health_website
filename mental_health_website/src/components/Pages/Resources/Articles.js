import React from "react";
import './css/Articles.css';
import article_1 from '../../Images/article_1.jpg';
import article_2 from '../../Images/article_2.jpg';
import article_3 from '../../Images/article_3.jpg';
import article_4 from '../../Images/article_4.jpg';
import { CardGroup, Card } from 'react-bootstrap'
import { BsChevronCompactRight } from 'react-icons/bs'

export const Articles = () => {
    return(
        <div className="fourthRow">
            <div className="header">
                <h1>Articles on Mental Health</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                Donec dictum tincidunt vulputate.
            </p>
            </div>
            <CardGroup style={{margin: '2em 5em 5em 5em'}}>
              <Card bsPrefix="article">
                <Card.Img bsPrefix='custom-img' src={article_1}/>
                <Card.Body>
                  <Card.Title>Thoughts on optimism</Card.Title>
                  <Card.Link href="https://www.health.harvard.edu/mind-and-mood/thoughts-on-optimism">See More <BsChevronCompactRight/></Card.Link>
                </Card.Body>
              </Card>
              <Card bsPrefix="article">
                <Card.Img bsPrefix='custom-img'src={article_2} />
                <Card.Body>
                  <Card.Title>Coronavirus and your mental wellbeing</Card.Title>
                  <Card.Link href="https://www.oxfordhealth.nhs.uk/news/coronavirus-and-your-mental-wellbeing/">See More <BsChevronCompactRight/></Card.Link>
                </Card.Body>
              </Card>
              <Card bsPrefix="article">
                <Card.Img bsPrefix='custom-img' src={article_3} />
                <Card.Body>
                  <Card.Title>Coronavirus Mental Health Toolkit</Card.Title>
                  <Card.Link href="https://www.helpguide.org/coronavirus-mental-health-toolkit.htm">See More <BsChevronCompactRight/></Card.Link>
                </Card.Body>
              </Card>
              <Card bsPrefix="article">
                <Card.Img bsPrefix='custom-img' src={article_4} />
                <Card.Body>
                  <Card.Title>Seven Ways to Cope with Uncertainty</Card.Title>
                  <Card.Link href="https://greatergood.berkeley.edu/article/item/seven_ways_to_cope_with_uncertainty">See More <BsChevronCompactRight/></Card.Link>
                </Card.Body>
              </Card>
            </CardGroup>
        </div>
    );
};

export default Articles;