import React from "react";
import { Button } from "react-bootstrap";
import { Card, CardGroup, Carousel } from "react-bootstrap";
import { Image } from "react-bootstrap";
import ShopCouterButton from "./ShopCounterButton";
import ShopCounter from "./ShopCounter";

import pin2 from "./Pages/images/pin1.JPG";
import pin1 from "./Pages/images/pin2.JPG";
import pin3 from "./Pages/images/pin3.JPG";
import pin4 from "./Pages/images/pin4.JPG";
import patch2 from "./Pages/images/patch1.JPG";
import patch1 from "./Pages/images/patch2.JPG";
import patch3 from "./Pages/images/patch3.JPG";
import hat1 from "./Pages/images/hat1.JPG";
import hat2 from "./Pages/images/hat2.JPG";
import hat3 from "./Pages/images/hat3.JPG";
import hat4 from "./Pages/images/hat4.JPG";

import "./ShopItems.css";

export const ShopItems = () => {
    return(
            <CardGroup className = "grid">
            <Card className="text-center box">
                <Carousel className="itemPics" interval="100000000000000">
                    <Carousel.Item>
                        <Card.Img as={Image} variant="top" src={patch1} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card.Img as={Image} variant="top" src={patch2}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card.Img as={Image} variant="top" src={patch3}/>
                    </Carousel.Item>
                </Carousel>
                <Card.Body>
                    <Card.Title className = "titleCard">Patch</Card.Title>
                    <div className = "counterStyle">
                    <ShopCounter/>
                    </div>
                    <Button className="button" variant="dark">ADD TO CART</Button>

                </Card.Body>
            </Card>
            <Card className="text-center box">
                <Carousel className="itemPics" interval="100000000000000">
                    <Carousel.Item>
                        <Card.Img as={Image} variant="top" src={pin1}/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Card.Img as={Image} variant="top" src={pin2}/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Card.Img as={Image} variant="top" src={pin3}/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Card.Img as={Image} variant="top" src={pin4}/>
                    </Carousel.Item>
                </Carousel>
                <Card.Body>
                    <Card.Title>Pin</Card.Title>
                    <div className = "counterStyle">
                    <ShopCounter/>
                    </div>
                    <Button className="button" variant="dark">ADD TO CART</Button>
                </Card.Body>
            </Card>
            <Card className="text-center box">
                <Carousel className="itemPics" interval="100000000000000">
                    <Carousel.Item>
                        <Card.Img as={Image} variant="top" src={hat1}/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Card.Img as={Image} variant="top" src={hat2}/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Card.Img as={Image} variant="top" src={hat3}/>
                    </Carousel.Item>
                    <Carousel.Item >
                        <Card.Img as={Image} variant="top" src={hat4}/>
                    </Carousel.Item>
                </Carousel>
                <Card.Body>
                    <Card.Title>Hat</Card.Title>
                    <div className = "counterStyle">
                    <ShopCounter/>
                    </div>
                    <Button className="button" variant="dark">ADD TO CART</Button>
                </Card.Body>
            </Card>
          </CardGroup>
    );
};