import React, { useState } from "react";
import { CartItem } from "./CartItem";
import "./Styles/MyCart.css";
import {Link} from "react-router-dom";
import items from "./Products";
import { Card, CardGroup, Carousel, Image } from "react-bootstrap";
import { Button } from "react-bootstrap";
import teddy from './Pages/images/merch-teddy.JPG'
import "./Styles/Support.css";
import './Styles/ShopItems.css'
import { Container, Row, Col } from "react-bootstrap";
import ShopCheckoutForm from './Pages/ShopCheckoutForm';


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
      <div>
      <div className="MyCart-container">
         <h4>My Cart</h4>
           <div className="MyCart-divider" />
             {listItemsInCart()}
           <div className="MyCart-divider" />
           <div className="MyCart-cost-summary">
            <h4>Total + Shipping</h4>
            <h4><span className="green-text"> $ {cartTotal()}  </span></h4>
          </div>
          <div className = "shopCheckoutForm">
            <ShopCheckoutForm />
          </div>
      </div>
    </div>
    );
};