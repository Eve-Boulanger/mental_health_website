import React, {useState} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import "../Styles/Donation.css";

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

// This includes the stripe donation form and navigation to the donation confirmation page if successful.
// TODO: use stripe form & stripe container (uncommented) and fix donation success navigation

function Donation() {
   
    //Product Object: name and price
    toast.configure()

    const [product] = useState({
        name: "Hat",
        price: 15, //in cents
        description: 'this is a hat asf'
    })

    async function handleToken(token, addresses) {
        const response = await axios.post('http://localhost:5000/checkout', {token,product})
        console.log(response.status)
    }

    return (
        <div className = "submitDonation">
            <div className = "container">
                <h1 className = "text-center">Stripe Payment Checkout Demo</h1>
                <br></br>
                <div className = 'form-group container'>
                    <StripeCheckout
                        stripeKey = "pk_test_51NSrCSGZIZjTCOU7N9QNzvxXVbXQSh4e7DFkOOGyRUDjK8qCkxWr019ZDJ1kmbC5uEkJYLCfNOFQptZK7CD7SLu700LKpvOJD6"
                        token = {handleToken}
                        amount = {product.price*100} //*100 to convert to dollars instead of cents
                        name = {product.name}
                        billingAddress
                        shippingAddress
                    />
                </div>
            </div>
        </div>
    );
}
export default Donation;