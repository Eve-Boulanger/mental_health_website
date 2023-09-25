import { useState, useEffect} from "react";

// This file ensures the functionality in DonationForm.js (donation form without Stripe API)
// It should be discarded along with DonationForm.js, currently keeping while DonationFormStripe.js (donation form with Stripe API) is under construction

const useDonationForm = (callback) => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        donationAmount: "",
        cardHolder: "",
        cardNumber: "",
        expDate: "",
        cvv: "",
        address:"",
        city: "",
        country: "",
        province: "",
        postalCode: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = e => {
        const { name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setIsSubmitting(true);
    }

    useEffect(
        () => {
            if(isSubmitting) {
                callback();
            }
        }
    )
    return {handleChange, values, handleSubmit};
};

export default useDonationForm;