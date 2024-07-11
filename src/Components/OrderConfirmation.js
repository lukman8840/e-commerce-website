import React from 'react';
import './OrderConfirmation.css';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/')
    }

    return (
        <div className="confirmation-container">
            <div className="confirmation-content">
                <div className="checkmark-icon">✓</div>
                <h2>Your Order Has Been Placed Successfully</h2>
                <p>Thanks For Your Patronage</p>
                <button onClick={handleBack} className="home-btn" >Back To Homepage</button>
            </div>
        </div>
    );
};

export default OrderConfirmation;
