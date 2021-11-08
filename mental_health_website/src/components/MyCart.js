import React from "react";
import { CartItem } from "./CartItem";
import "./MyCart.css";
import {Link} from "react-router-dom";

export const MyCart = () => {
    return (
      <div className="MyCart-container">
        <h4>My Cart</h4>
        
        <div className="MyCart-divider" />

        <CartItem amount="1" item="Hat" price="12.99"/>
        <CartItem amount="2" item="Pin" price="89.99"/>
        <div className="MyCart-divider" />
        
        <div className="MyCart-cost-summary">
          <h4>Total + Shipping <span class="green-text"> ($10.99)</span></h4>
          <h4>$ 102.98</h4>
          <Link to="/paymentconfirmation"><button>
              Pay Now
            </button>
          </Link>
        </div>
        

      </div>
    );
  };