import React from "react";
import useDonationForm from "./useDonationForm";
//import validateDonationForm from "./validateDonationForm";
import "./Donation.css";

const DonationForm = ({submitDonation}) => {
    const {handleChange, values, handleSubmit, /*errors*/} = useDonationForm(submitDonation, /*validateDonationForm*/);

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h5>1. Your Information</h5>
                <div className="form-inputs">
                    <input
                        type="text"
                        name="firstName"
                        className="form-input"
                        placeholder="First Name"
                        value={values.firstName}
                        onChange={handleChange}
                        required
                    />
                    {/*errors.firstName && <p>{errors.firstName}</p>*/}
                </div>
                <div className="form-inputs">
                    <input
                        type="text"
                        name="lastName"
                        className="form-input"
                        placeholder="Last Name"
                        value={values.lastName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <div className="form-inputs aligned-inputs left-input">
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Email Address"
                            value={values.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="form-inputs aligned-inputs">
                        <input
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            name="phoneNumber"
                            className="form-input"
                            placeholder="Phone Number: XXX-XXX-XXXX"
                            value={values.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <h5>2. Payment Information</h5>
                <div className="form-inputs">
                <label htmlFor="donationAmount"
                    className="form-label">
                        Please select your donation amount ($CAD): 
                    </label>
                    {/* Switch to radio inputs for set donation amounts (?)
                    <input type="radio" id="amountOption1" name="amountOption"
                        value={values.AmountOption} onChange={handleChange} required />
                    <label for="amountOption1"> $5 CAD </label>

                    <input type="radio" id="amountOption2" name="amountOption"
                        value={values.AmountOption} onChange={handleChange} required />
                    <label for="amountOption2"> $15 CAD </label>

                    <input type="radio" id="amountOption3" name="amountOption"
                        value={values.AmountOption} onChange={handleChange} required />
                    <label for="amountOption3"> $25 CAD </label>

                    <input type="radio" id="amountOption4" name="amountOption"
                        value={values.AmountOption} onChange={handleChange} required />
                    <label for="amountOption4"> $50 CAD </label>

                    <input type="radio" id="amountOption5" name="amountOption" 
                        value={values.AmountOption} onChange={handleChange} required />
                    <label for="amountOption5"> $100 CAD </label>

                    <input type="radio" id="amountOption6" name="amountOption" 
                        value={values.AmountOption} onChange={handleChange} required />
                    <label for="amountOption6"> Other </label>
                    */}
                    <input
                        type="number"
                        name="donationAmount"
                        min="0"
                        max="200"
                        step="5"
                        className="form-input"
                        placeholder="Donation Amount ($CAD)"
                        value={values.donationAmount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-inputs">
                    <input
                        type="text"
                        pattern="([a-zA-Z]+\s){1,}([a-zA-Z]+)"
                        name="cardHolder"
                        className="form-input"
                        placeholder="Cardholder Name"
                        value={values.cardHolder}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-inputs">
                    <input
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9\s]{13,19}"
                        maxLength="19"
                        name="cardNumber"
                        className="form-input"
                        placeholder="Card Number"
                        value={values.cardNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="expData"
                    className="form-label">
                        Please select your card expiry date: 
                    </label>
                    <input
                        type="date"
                        name="expDate"
                        className="form-input"
                        placeholder="Expiration Date"
                        value={values.expDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-inputs">
                    <input
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9\s]{3}"
                        maxLength="3"
                        name="cvv"
                        className="form-input"
                        placeholder="CVV"
                        value={values.cvv}
                        onChange={handleChange}
                        required
                    />
                </div>

                <h5>3. Billing Information</h5>
                <div className="form-inputs">
                    <input
                        type="text"
                        name="address"
                        className="form-input"
                        placeholder="Street Address"
                        value={values.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <div className="form-inputs aligned-inputs left-input">
                        <input
                            type="text"
                            name="city"
                            className="form-input"
                            placeholder="City"
                            value={values.city}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-inputs aligned-inputs">
                        <input
                            type="text"
                            name="country"
                            className="form-input"
                            placeholder="Country"
                            value={values.country}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div>
                    <div className="form-inputs aligned-inputs left-input">
                        <input
                            type="text"
                            name="province"
                            className="form-input"
                            placeholder="Province"
                            value={values.province}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-inputs aligned-inputs">
                        <input
                            type="text"
                            name="postalCode"
                            className="form-input"
                            placeholder="Postal Code"
                            value={values.postalCode}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <button className="form-input-btn" type="submit">
                    DONATE NOW
                </button>
            </form>
        </div>
    )
}

export default DonationForm
