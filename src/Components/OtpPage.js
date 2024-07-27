import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OtpPage.css';

const OtpPage = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState(Array(6).fill(''));

    

    const handleOtpChange = (e, index) => {
        const { value } = e.target;
        const newOtp = [...otp];
        newOtp[index] = value.slice(-1);
        setOtp(newOtp);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const otpValue = otp.join('');
        console.log('Submitted OTP:', otpValue);
        navigate('/OrderConfirmation'); 
    };

    return (
        <div className='otp-container'>
            <div className='otp-box'>
                <div className='main-otp-container'>
                    <p> An OTP have been sent to your Email</p>
                    <h1>Enter The OTP</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='otp-input-group'>
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type='text'
                                    maxLength='1'
                                    value={digit}
                                    onChange={(e) => handleOtpChange(e, index)}
                                    className='otp-input'
                                    required
                                />
                            ))}
                        </div>
                        <button type='submit' className='submit-btn'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OtpPage;
