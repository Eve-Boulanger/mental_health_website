import React from "react";
import useDonationForm from "./useDonationForm";

import "./Styles/Donation.css";

// This is the donation form without Stripe API.
// This file is a placeholder for until the donation form with Stripe API is developed (DonationFormStripe)

const DonationForm = ({submitDonation}) => {
    const {handleChange, values, handleSubmit} = useDonationForm(submitDonation);

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h5>1. Donor Information</h5>
                <div>
                    <div className="form-inputs aligned-inputs left-input">
                        <label htmlFor="firstName"
                        className="form-label">
                            Donor Full Name *
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            className="form-input"
                            placeholder="First Name"
                            value={values.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-inputs aligned-inputs">
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
                </div>
                <div>
                    <div className="form-inputs aligned-inputs left-input">
                        <label htmlFor="email"
                        className="form-label">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="ex. myname@example.com"
                            value={values.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="form-inputs aligned-inputs">
                        <label htmlFor="phoneNumber"
                        className="form-label">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            name="phoneNumber"
                            className="form-input"
                            placeholder="XXX-XXX-XXXX"
                            value={values.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <h5>2. Donation Amount</h5>
                <div className="form-inputs">
                    <label htmlFor="donationAmount"
                    className="form-label">
                        Please select your donation amount ($CAD) *
                    </label>
                    <input
                        type="number"
                        name="donationAmount"
                        min="5"
                        max="200"
                        step="5"
                        className="form-input"
                        placeholder="Donation Amount ($CAD)"
                        value={values.donationAmount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <h5>3. Payment Information</h5>
                <div className="form-inputs">
                    <label htmlFor="cardHolder"
                    className="form-label">
                        Cardholder Name *
                    </label>
                    <input
                        type="text"
                        pattern="([a-zA-Z]+\s){1,}([a-zA-Z]+)"
                        name="cardHolder"
                        className="form-input"
                        placeholder="Valid Full Name"
                        value={values.cardHolder}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-inputs">
                    <label htmlFor="cardNumber"
                    className="form-label">
                        Card Number *
                    </label>
                    <input
                        type="tel"
                        inputMode="numeric"
                        pattern="[0-9\s]{13,19}"
                        maxLength="19"
                        name="cardNumber"
                        className="form-input"
                        placeholder="XXXX XXXX XXXX XXXX"
                        value={values.cardNumber}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <div className="form-inputs aligned-inputs left-input">
                        <label htmlFor="expData"
                        className="form-label">
                            Card Expiration Date *
                        </label>
                        <input
                            type="date"
                            name="expDate"
                            className="form-input"
                            placeholder="Expiration Date *"
                            value={values.expDate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-inputs aligned-inputs">
                        <label htmlFor="cvv"
                        className="form-label">
                            Card Verification Value (CVV) *
                        </label>
                        <input
                            type="tel"
                            inputMode="numeric"
                            pattern="[0-9\s]{3}"
                            maxLength="3"
                            name="cvv"
                            className="form-input"
                            placeholder="XXX"
                            value={values.cvv}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <h5>4. Billing Information</h5>
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
                    <div className = "donate-now-btn">
                        <button className="form-input-btn" type="submit">
                            DONATE NOW
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default DonationForm
