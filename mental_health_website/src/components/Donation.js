import React, {useState} from "react";

import DonationForm from "./DonationForm";
import DonationSuccess from "./DonationSuccess";
import "./Donation.css";

const Donation = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitDonation() {
        setIsSubmitted(true);
    }
    return (
        <div className="form-container">
            {!isSubmitted ? <DonationForm submitDonation=
            {submitDonation} /> : <DonationSuccess />}
        </div>
    )
}

export default Donation
