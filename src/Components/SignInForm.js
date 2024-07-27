import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from './AuthContext';



const SignInForm = ({ onClose }) => {
  const {login} = useContext(AuthContext)
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
  });

 const navigate = useNavigate();
 const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      setError('Password must be greater than 8 characters');
      return;
    }
    login();
    
    navigate('/checkout');
  };

const handleCancel = (e) => {
  e.preventDefault()
  console.log('cancel')
  navigate('cart')
}
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <CloseButton onClick={handleCancel}>&times;</CloseButton>
        <Title>Sign In to Your Account</Title>
        <Label>
          Email<Asterisk>*</Asterisk>
          <Input
            type='text'
            name='emailOrPhone'
            value={formData.emailOrPhone}
            onChange={handleChange}
            required
          />
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
        </Label>
        {error && <Error>{error}</Error>}
        <ForgetPasswordLink href="#">Forget your Password? Click here</ForgetPasswordLink>
        <ButtonContainer>
          <CenteredButton type='submit'>Sign In</CenteredButton>
        </ButtonContainer>
      </Form>
    </FormContainer>
  );
};

export default SignInForm;

const FormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 450px;
  max-width: 100%;

  @media (max-width: 768px){
    width: 300px;
    height: fit-content;
  }
`;

const Form = styled.form`
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  background: black;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Asterisk = styled.span`
  color: red;
`;

const Input = styled.input`
  width: 85%;
  padding: 15px;
  margin-bottom: 1rem;
  margin-right: 10px;
  border: 1px solid black;
  border-radius: 4px;
`;

const ForgetPasswordLink = styled.a`
  display: block;
  text-align: center;
  margin-bottom: 1rem;
  color: blue;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Error = styled.span`
  color: red;
  display: block;
  margin-bottom: 1rem;
`;

const CenteredButton = styled.button`
  padding: 15px 100px;
  background: black;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;
