import React, { useState } from "react";
import { CartItem } from "./CartItem";
import "./MyCart.css";
import {Link} from "react-router-dom";
import items from "./Products";
import { Card, CardGroup, Carousel, Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import teddy from './Pages/images/merch-teddy.JPG'
import "./Pages/Support.css";
import { Container, Row, Col } from "react-bootstrap";
import "./ShopItems.css";
import { MyCart } from "./MyCart";

export const ShopItems = () => {
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)

  const addToCart = (item) => {
    setCart((currentCart) => [...currentCart, item]);
  }

  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === item.id);

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  }

  const listItemsToBuy = () => items.map((item) => (
    <Card className="text-center box"  key={item.id}>
      <Carousel className="itemPics" interval="100000000000000">
          <Carousel.Item>
              <Card.Img className="itemPics" as={Image} variant="top" src={item.imgPath1}/>
          </Carousel.Item>
          <Carousel.Item >
              <Card.Img className="itemPics" as={Image} variant="top" src={item.imgPath2}/>
          </Carousel.Item>
          <Carousel.Item >
              <Card.Img className="itemPics" as={Image} variant="top" src={item.imgPath3}/>
          </Carousel.Item>
      </Carousel>
      <Card.Body>
          <Card.Title className = "titleCard">{item.name}</Card.Title>
          <div className = "counterStyle">
          <div className = "ButtonCounterContainer">
            <Button variant="light" sign="+" onClick={() => {addToCart(item); setCount(count + 1)}} >+</Button>
            &nbsp;&nbsp;&nbsp;{amountOfItems(item.id)}&nbsp;&nbsp;&nbsp;
            <Button sign="-" variant="light" onClick={() => {removeFromCart(item); setCount(count - 1)}} >-</Button>
          </div>
          </div>
          <Button className="button" variant="dark" onClick={() => addToCart(item)}>ADD TO CART</Button>
      </Card.Body>
    </Card>
  ));

  const checkoutPageDirection = () => (
    <div className = "checkoutButton">
     <Link to= "/mycart">
       <button>
         CHECKOUT
       </button>
     </Link>
     </div>
  );

  const amountOfItems = (id) => cart.filter((item) => item.id === id).length;
    return (
      <div>
      <Row>  
      <Col>
        <h1><img src={teddy} alt="teddy" width={168} height={100}/> SHOP.</h1>
          <div className="items-container">
            <CardGroup className = "grid" data-interval="false">
              {listItemsToBuy()}
            </CardGroup>
          </div> 
      </Col>
      <Col>
      <Container>
      <Row>
        <Col>
        {checkoutPageDirection()}
        </Col>
      </Row>
      </Container>
    </Col>
    </Row>
    </div>
    );
};