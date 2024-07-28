import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const SignUpForm = ({ onClose }) => {
  const navigate = useNavigate();
  const {login} = useContext(AuthContext)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      'firstName', 
      'lastName', 
      'email', 
      'phoneNumber', 
      'password', 
      'confirmPassword'
    ];

    // Validation
    let newErrors = {};
    for (const field of requiredFields) {
      if (!formData[field]) {
        newErrors[field] = 'This field is required.';
      }
    }

    // Password length validation
    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long.';
    }

    // Password match validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    login()
    console.log('Form Submitted:', formData);
    navigate('/checkout');
  };

  const handleCancel = () => {
    navigate('/cart');
  };

  return (
    <SignUpFormContainer>
      <Form onSubmit={handleSubmit}>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        <Title>Create an Account</Title>

        <Label>
          FirstName <Asterisk>*</Asterisk>
          <Input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && <Error>{errors.firstName}</Error>}
        </Label>
        <Label>
          LastName <Asterisk>*</Asterisk>
          <Input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && <Error>{errors.lastName}</Error>}
        </Label>
        <Label>
          Email <Asterisk>*</Asterisk>
          <Input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <Error>{errors.email}</Error>}
        </Label>
        <Label>
          PhoneNumber <Asterisk>*</Asterisk>
          <Input
            type='tel'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          {errors.phoneNumber && <Error>{errors.phoneNumber}</Error>}
        </Label>
        <Label>
          Password <Asterisk>*</Asterisk>
          <Input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <Error>{errors.password}</Error>}
        </Label>
        <Label>
          ConfirmPassword <Asterisk>*</Asterisk>
          <Input
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <Error>{errors.confirmPassword}</Error>}
        </Label>
        <ButtonContainer>
          <CenteredButton type='submit'>Sign Up</CenteredButton>
        </ButtonContainer>
      </Form>
    </SignUpFormContainer>
  );
};

export default SignUpForm
// style component
const SignUpFormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-width: 100%;
  position: relative;


  @media (max-width: 768px){
    width: 250px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
`;

const Label = styled.label`
  display: block;
  text-align: justify;
  margin-bottom: 0.5rem;
`;

const Asterisk = styled.span`
  color: red;
  text-align: justify;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Error = styled.span`
  color: red;
  font-size: 0.875rem;
  display: block;
  margin-top: 0.25rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CenteredButton = styled.button`
  padding: 15px 100px;
  background: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  @media (max-width: 768px){
    width: 280px; 
  }

  &:hover {
    background: #333;
  }
`;
