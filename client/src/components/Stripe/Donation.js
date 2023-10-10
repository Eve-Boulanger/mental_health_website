import React, {useState, useEffect} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import "../Styles/Donation.css";

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const ProductDisplay = () => (
    <section>
      <div className="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div className="description">
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
        </div>
      </div>
      <form action="http://localhost:4242/create-checkout-session" method="POST">
        <button type="submit">
          Checkout
        </button>
      </form>
    </section>
  );

const Message = ({ message }) => (
    <section>
        <p>{message}</p>
    </section>
    );

export default function Donation() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);

        if (query.get("success")) {
        setMessage("Order placed! You will receive an email confirmation.");
        }

        if (query.get("canceled")) {
        setMessage(
            "Order canceled -- continue to shop around and checkout when you're ready."
        );
        }
    }, []);

    return message ? (
        <Message message={message} />
    ) : (
        <ProductDisplay />
    );
}
// This includes the stripe donation form and navigation to the donation confirmation page if successful.
// TODO: use stripe form & stripe container (uncommented) and fix donation success navigation

// function Donation() {
   
//     //Product Object: name and price
//     toast.configure()

//     const [product] = useState({
//         name: "Hat",
//         price: 15, //in cents
//         description: 'this is a hat asf'
//     })

//     async function handleToken(token, addresses) {
//         const response = await axios.post('http://localhost:4242/checkout', {token,product})
//         console.log(response.status)
//         console.log(response.request)
//         console.log(response.message)
//         if (response.status === 200)
//         {
//             toast("Success Payment is completed", {type:'success'})
//         }
//         else{
//             toast("Failure payment is not completed", {type:'error'})
//         }
//     }

//     return (
//         <div className = "submitDonation">
//             <div className = "container">
//                 <h1 className = "text-center">Stripe Payment Checkout Demo</h1>
//                 <br></br>
//                 <div className = 'form-group container'>
//                     <StripeCheckout
//                         stripeKey = "pk_test_51NSrCSGZIZjTCOU7N9QNzvxXVbXQSh4e7DFkOOGyRUDjK8qCkxWr019ZDJ1kmbC5uEkJYLCfNOFQptZK7CD7SLu700LKpvOJD6"
//                         token = {handleToken}
//                         amount = {product.price*100} //*100 to convert to dollars instead of cents
//                         name = {product.name}
//                         billingAddress
//                         shippingAddress
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }
// export default Donation;