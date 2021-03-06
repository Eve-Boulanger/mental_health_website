import React, {useState} from "react";

import DonationForm from "./DonationForm";
import StripeContainer from "./StripeContainer"
import DonationSuccess from "./DonationSuccess";
import "./Donation.css";

const Donation = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitDonation() {
        setIsSubmitted(true);
    }

    // // 1.Using DonationFormStripe (StripeContainer)
    // return (
    //     <div className="form-container">
    //         {!isSubmitted ? <StripeContainer submitDonation=
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

export default Donation
