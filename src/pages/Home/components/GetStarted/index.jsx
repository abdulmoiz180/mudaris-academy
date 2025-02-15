import * as React from 'react';
import Box from '@mui/material/Box';
import './getstarted.css';
import { Container, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

function GetStart() {
  const language = 'persian';
  const fontClass = language === 'persian' ? 'rubik' : 'inter';
  const { t } = useTranslation('home');

  const [email, setEmail] = useState(''); // State to store input field data

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'https://v1.nocodeapi.com/hassan321/google_sheets/PDYSVtUFJAnfFCeB?tabId=Sheet1', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
             [[email,new Date()]] // Correct 2D array format
          ),
        }
      );
  
      const result = await response.json();
      console.log(result); // Log response to debug issues
  
      if (result.error) {
        throw new Error(result.info);
      }
  
      setEmail(""); // Clear input field
      alert("Thank you for your interest. We will contact you soon!"); 
    } catch (error) {
      console.error("Error in sending email:", error);
      alert("Sorry, the server is not responding. Try later!!!");
    }
  };
  

  return (
    <Container className="get-start-container">
      {/* Displaying the title */}
      <h1 className={`clr-white get-start-heading mobHeading ${fontClass}`}>
        {t('GetStarted.title1')}
        {t('GetStarted.title2')}
      </h1>

      {/* Input field with placeholder */}
      <Box className="get-email-field">
        <TextField
          type="email"
          placeholder={t('GetStarted.inputfield')}
          variant="outlined"
          className={`custom-input ${fontClass}`}
          fullWidth
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Store input field data
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#FFFFFF26', // Outline color
              },
              '&:hover fieldset': {
                borderColor: '#FFFFFF26', // Outline color on hover
              },
              '& .MuiInputBase-input': {
                color: '#FFF', // Text color
              },
              '&.Mui-focused fieldset': {
                borderColor: '#FFFFFF26', // Outline color when focused
              },
            },
            '& .MuiInputBase-input::placeholder': {
              color: '#fff', // Placeholder color
            },
          }}
        />

        <button
          className={`button-text ${fontClass} ${
            language === 'persian' ? 'my-with' : 'get-start-button'
          }`}
          onClick={handleSubmit} // Attach click event
        >
          {t('GetStarted.buttontext')}
        </button>
      </Box>
    </Container>
  );
}

export default GetStart;
