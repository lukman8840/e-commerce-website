import React from 'react'; // Import React library
import { IoMdClose } from "react-icons/io"; // Import the close icon from react-icons library
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom for navigation
import './AdressForm.css'; // Import the CSS file for styling the AddressForm component

// AddressForm component definition
const AddressForm = () => {
    const navigate = useNavigate(); // Initialize navigate for programmatic navigation

    // Function to handle form close
    const handleClose = () => {
        navigate('/'); // Navigate to home or another route
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission
        const form = event.target; // Get the form element from the event

        // Extract form field values
        const firstName = form['first-name'].value;
        const lastName = form['last-name'].value;
        const email = form['email'].value;
        const phoneNumber = form['phone-number'].value;
        const homeAddress = form['home-address'].value;
        const city = form['city'].value;
        const state = form['state'].value;

        if (!firstName || !lastName || !email || !phoneNumber || !homeAddress || !city || !state) {
            alert('Please fill all required fields'); // Alert the user to fill all required fields
            return; // Exit the function if any field is empty
        }
        navigate('/Checkout');
    };

    const handleBack = () => {
        navigate('/checkout')
    }
    return (
        <div className="address-form-container">
            <div className='container'>
                <div className="address-form-header">
                    <h1>Address Form</h1>
                    <button className="close-btn" onClick={handleClose}>
                        <IoMdClose /> {/* Render the close icon */}
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    {/* Row for first and last name */}
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
                    {/* Input field for email */}
                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    {/* Input field for phone number */}
                    <div className="input-group">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input type="tel" id="phone-number" name="phone-number" required />
                    </div>
                    {/* Input field for home address */}
                    <div className="input-group">
                        <label htmlFor="home-address">Home Address</label>
                        <input type="text" id="home-address" name="home-address" required />
                    </div>
                    {/* Input field for city */}
                    <div className="input-group">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" name="city" required />
                    </div>
                    {/* Input field for state */}
                    <div className="input-group">
                        <label htmlFor="state">State</label>
                        <input type="text" id="state" name="state" required />
                    </div>

                    <button type="submit" className="submit-btn" onClick={handleBack}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddressForm; 
