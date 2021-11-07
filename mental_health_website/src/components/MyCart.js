import React, { useState } from "react";
import { CartItem } from "./CartItem";
import "./MyCart.css";
import items from "./Products";
import { Card, CardGroup, Carousel, Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import teddy from './Pages/images/merch-teddy.JPG'
import "./Pages/Support.css";

export const MyCart = () => {
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
    <Card className="text-center box" data-interval="false"  key={item.id}>
      <Carousel className="itemPics" data-interval="false">
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
            <Button sign="+" onClick={() => {addToCart(item); setCount(count + 1)}} />
            &nbsp;&nbsp;&nbsp;{amountOfItems(item.id)}&nbsp;&nbsp;&nbsp;
            <Button sign="-" onClick={() => {removeFromCart(item); setCount(count - 1)}} />
          </div>
          </div>
          <Button className="button" variant="dark" onClick={() => addToCart(item)}>ADD TO CART</Button>

      </Card.Body>
    </Card>
  ));

  const amountOfItems = (id) => cart.filter((item) => item.id === id).length;
  
  const listItemsInCart = () => items.map((item) => 
    (
    <div className="row" key={item.id}>
     <div className="col-md-9"><CartItem amount={amountOfItems(item.id)} item={item.name} price={item.price}/></div>
     <Button className="col-md-2" variant="dark" type="submit" onClick={() => removeFromCart(item)}>Remove</Button>
     </div>
  ));

  const cartTotal = () => {
    let total = 0
    total =  cart.reduce((total, { price = 0 }) => total + price + 10.99, 0);
    return total.toFixed(2)
  }


    return (
      <div className="row">  
      <div className="col-md-6">
        <h1><img src={teddy} alt="teddy" width={168} height={100}/> SHOP.</h1>
          <div>
            <CardGroup className = "grid" data-interval="false">
              {listItemsToBuy()}
            </CardGroup>
          </div>
      </div>    
      <div className="col-md-6">
      <div className="MyCart-container">
         <h4>My Cart</h4>
           <div className="MyCart-divider" />
             {listItemsInCart()}
           <div className="MyCart-divider" />
         <div className="MyCart-cost-summary">
           <h4>Total + Shipping <span class="green-text"> ($10.99)</span></h4>
           <h4>$ {cartTotal()}</h4>
         </div>
       </div>
      </div>
    </div>
    );
  };