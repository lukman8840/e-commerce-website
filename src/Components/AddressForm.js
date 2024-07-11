import React from 'react';
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './AdressForm.css'; // Corrected the file name

const AddressForm = () => {
    const navigate = useNavigate(); // Initialize navigate

    const handleClose = () => {
        // Logic to handle form close
    };

    const handleBack = (event) => {
        event.preventDefault();
        window.history.back(); // Go back in browser history
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const firstName = form['first-name'].value;
        const lastName = form['last-name'].value;
        const email = form['email'].value;
        const phoneNumber = form['phone-number'].value;
        const homeAddress = form['home-address'].value;
        const city = form['city'].value;
        const state = form['state'].value;

        if (!firstName || !lastName || !email || !phoneNumber || !homeAddress || !city || !state) {
            alert('Please fill all required fields');
            return;
        }
        navigate('/Checkout');
    };

    return (
        <div className="address-form-container">
            <div className="address-form-header">
                <h1>Address Form</h1>
                <button className="close-btn" onClick={handleClose}>
                    <IoMdClose />
                </button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-row">
                    <div className="input-group">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" name="first-name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name="last-name" required />
                    </div>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="input-group">
                    <label htmlFor="phone-number">Phone Number</label>
                    <input type="number" id="phone-number" name="phone-number" required />
                </div>
                <div className="input-group">
                    <label htmlFor="home-address">Home Address</label>
                    <input type="text" id="home-address" name="home-address" required />
                </div>
                <div className="input-group">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" required />
                </div>
                <div className="input-group">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" name="state" required />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
                <button onClick={handleBack} className="back-btn">Back</button> 
            </form>
        </div>
    );
};

export default AddressForm;
