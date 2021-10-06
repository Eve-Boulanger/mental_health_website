import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Image } from "react-bootstrap";

import pin1 from "./Pages/images/pin1.JPG";
import pin2 from "./Pages/images/pin2.JPG";
import patch1 from "./Pages/images/patch1.JPG";

import "./ShopItems.css";

const ShopItems = () => {
    const cardInfo = [
        {pic: {pin1}, title: "Pin"},
        {pic: {pin2}, title: "Hat"},
        {pic: {patch1}, title: "Patch"},
    ];

    const renderCard = (card, index) => {
        return (
            <Card className="text-center box" style={{ width: '18rem' }} key={index}>
                <Card.Img as={Image} variant="top" src={card.pic} fluid={true}/>
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Button className="button" variant="dark">ADD TO CART</Button>
                </Card.Body>
            </Card>

        )
    }
    return <div className="grid">{cardInfo.map(renderCard)}</div>
};

export default ShopItems;