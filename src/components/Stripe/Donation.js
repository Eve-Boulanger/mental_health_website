import React, {useState} from "react";

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import DonationForm from "./DonationForm";
import DonationSuccess from "./DonationSuccess";
import "../Styles/Donation.css";

import StripeCheckout from 'react-stripe-checkout';

// This includes the stripe donation form and navigation to the donation confirmation page if successful.
// TODO: use stripe form & stripe container (uncommented) and fix donation success navigation

function Donation() {
    return (
        <div className = "submitDonation">
            <div className = "container">
                <h1 className = "text-center">Stripe Payment Checkout Demo</h1>
                <br></br>
                <div className = 'form-group container'>
                    <StripeCheckout/>
                </div>
            </div>
        </div>
    );
}
export default Donation;

/*const Donation = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitDonation() {
        setIsSubmitted(true);
    }

    // // 1.Using DonationFormStripe (StripeContext)
    // return (
    //     <div className="form-container">
    //         {!isSubmitted ? <StripeContext submitDonation=
    //         {submitDonation} /> : <DonationSuccess />}
    //     </div>
    // )

    // 2. Using DonationForm
    return (
        <div className="form-container">
            {!isSubmitted ? <DonationForm submitDonation=
            {submitDonation} /> : <DonationSuccess />}
        </div>
    )
}

*/


