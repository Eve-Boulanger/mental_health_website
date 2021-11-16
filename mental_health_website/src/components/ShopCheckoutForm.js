import React from "react";
import './ShopCheckoutForm.css';

export const ShopCheckoutForm = () => {
    return (
        <div>
            <div className="shop-form-container">
                <div className="left">
                    <input
                        type="text"
                        name="cardHolderName"
                        className="shop-form-input"
                        placeholder="Card Holder Name *"
                    />

                    <input
                        type="text"
                        name="cardNumber"
                        className="shop-form-input"
                        placeholder="Card Number *"
                    />

                    <input
                        type="text"
                        name="expirationDate"
                        className="shop-form-input-short"
                        placeholder="Expiration Date *"
                    />

                    <input
                        type="text"
                        name="CVV"
                        className="shop-form-input-short"
                        placeholder="CVV *"
                    />
                </div>

                <div className="right">
                    <input
                            type="text"
                            name="address"
                            className="shop-form-input"
                            placeholder="Address *"
                        />

                        <input
                            type="text"
                            name="city"
                            className="shop-form-input-short"
                            placeholder="City *"
                        />

                        <input
                            type="text"
                            name="state-province"
                            className="shop-form-input-short"
                            placeholder="State/Province *"
                        />

                        <input
                            type="text"
                            name="country"
                            className="shop-form-input-short"
                            placeholder="Country *"
                        />

                        <input
                            type="text"
                            name="zip-postal-code"
                            className="shop-form-input-short"
                            placeholder="Zip/Postal Code *"
                        />
                </div>
                <button className="checkout-button" type="submit">
                    PLACE ORDER
                </button>                
            </div>
        </div>
        
    );
  };