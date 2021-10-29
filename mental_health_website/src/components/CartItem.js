import React from "react";
import "./CartItem.css";

export const CartItem = (props) => {
    return (
        <div className="cart-item">
            <p>{props.amount} x {props.item} </p>
            <p>$ {props.price} </p>
        </div>
      
    );
  };