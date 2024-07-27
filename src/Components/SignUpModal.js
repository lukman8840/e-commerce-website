import React, { useState } from 'react';
import styled from 'styled-components';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';

const SignUpModal = ({ onClose }) => {
  const [showForm, setShowForm] = useState(null); // Default to showing SignInForm

  const handleToggleForm = (formType) => {
    setShowForm(formType);
  };

  return (
    <SignUpModalContainer>
      <ModalContent>
      <CloseButton onClick={onClose}>X</CloseButton>
        <Title>Please Sign In or Sign Up to Proceed</Title>
        <ButtonContainer>
          <Button onClick={() => handleToggleForm('signIn')} active={showForm === 'signIn'} signIn>
            Sign In
          </Button>
          <Button onClick={() => handleToggleForm('signUp')} active={showForm === 'signUp'} signUp>
            Sign Up
          </Button>
        </ButtonContainer>
          {showForm === 'signUp' && <SignUpForm onClose={onClose} />}
          {showForm === 'signIn' && <SignInForm onClose={onclose} />}
      </ModalContent>
    </SignUpModalContainer>
  );
};

export default SignUpModal;

const SignUpModalContainer = styled.div`
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

const ModalContent = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-width: 80%;
  text-align: center;
  position: relative;

  @media (max-width: 768px){
    width: 250px;
    height: 200px;
  }
`;

const Title = styled.h2`
  margin: 24px;
  font-size: 18px;
  font-weight: bolder;

  @media (max-width: 768px){
    font-size: 11px;
    font-weight: bolder;
    color: lightblue;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
`;

const Button = styled.button`
  background-color: ${(props) => (props.signIn ? 'green' : '#333')};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 15px 1rem;
  margin: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.signIn ? '#006400' : 'black')};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    background-color: none;
  }
`;
