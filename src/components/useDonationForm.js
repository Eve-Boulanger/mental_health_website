import { useState, useEffect} from "react";

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