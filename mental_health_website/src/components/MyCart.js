import React from "react";
import { CartItem } from "./CartItem";
import "./MyCart.css";

export const MyCart = () => {
    return (
      <div className="MyCart-container">
        <h3>My Cart</h3>
        
        <div className="MyCart-divider" />

        <CartItem amount="1" item="Hat" price="12.99"/>
        <CartItem amount="2" item="Pin" price="89.99"/>
        <div className="MyCart-divider" />
        
        <div className="MyCart-cost-summary">
          <h3>Total + Shipping <span class="green-text"> ($10.99)</span></h3>
          <h3>$ 102.98</h3>
        </div>
        

      </div>
    );
  };