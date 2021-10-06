import { useState, /*useEffect*/ } from "react";
//import validateDonationForm from "./validateDonationForm";

const useDonationForm = (/*callback, validateDonationForm*/) => {
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
    // const [errors, setErrors] = useState({});
    const [/*isSubmitting*/, setIsSubmitting] = useState(false);


    const handleChange = e => {
        const { name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        //setErrors(validateDonationForm(values));
        setIsSubmitting(true);
    }
/*
    useEffect(() => {
        if (Object.keys(errors).length === 0 &&
        isSubmitting) {
            callback();
        }
    },
    [errors]
);
*/
    return {handleChange, values, handleSubmit, /*errors*/};
};

export default useDonationForm;