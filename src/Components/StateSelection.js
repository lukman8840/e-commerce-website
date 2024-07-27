import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const StateSelection = ({ onClose }) => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState('');

  // Fetch the states from the JSON file in the public folder when the component mounts
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/states.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setStates(data.states);
        console.log('Fetched states:', data.states); // Log fetched states
      })
      .catch(error => console.error('Error fetching states:', error));
  }, []);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle address submission logic
    console.log("State Selected:", selectedState);
    onClose();
  };

  return (
    <AddressFormContainer>
      <Form>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        <Title>Select Your State</Title>
        <Label>
          State <Asterisk>*</Asterisk>
          <Select value={selectedState} onChange={handleStateChange} required>
            <option value="">Select a state</option>
            {states.map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </Select>
        </Label>
        <ButtonContainer>
          <CenteredButton type='submit' onClick={handleSubmit}>
            Submit
          </CenteredButton>
        </ButtonContainer>
      </Form>
    </AddressFormContainer>
  );
};

export default StateSelection;

// Styled Components
const AddressFormContainer = styled.div`
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
  margin-bottom: 0.5rem;
`;

const Asterisk = styled.span`
  color: red;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CenteredButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: 4px;
  background: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
