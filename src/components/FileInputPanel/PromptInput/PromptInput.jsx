import './PromptInput.css';
import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

function PromptInput() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log('Input Submitted:', inputValue);
    setInputValue(''); // Clear the input bar after submission
  };
  return (
    <>
      <div className="prompt-input-div">
        <Box sx={{ width: '600px', maxWidth: '100%' }}>
          <TextField
            fullWidth
            multiline
            className="prompt-input"
            value={inputValue}
            onChange={handleChange}
            placeholder="Enter something..."
            color="white"
            variant="outlined"
          ></TextField>
        </Box>

        <Button
          className="prompt-input-button"
          variant="contained"
          onClick={handleSubmit}
        >
          {' '}
          submit{' '}
        </Button>
      </div>
    </>
  );
}

export default PromptInput;
