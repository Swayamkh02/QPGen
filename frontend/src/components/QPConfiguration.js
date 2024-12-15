import React, { useState } from 'react';
import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  IconButton,
  Stack,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';

const QPConfiguration = () => {
  const [classValue, setClassValue] = useState('');
  const [chapterName, setChapterName] = useState('');
  const [questionConfigs, setQuestionConfigs] = useState([
    { type: '', quantity: '' },
  ]);

  // Handle change for class dropdown
  const handleClassChange = (event) => {
    setClassValue(event.target.value);
  };

  // Handle change for chapter name
  const handleChapterChange = (event) => {
    setChapterName(event.target.value);
  };

  // Handle change for individual question config
  const handleConfigChange = (index, field, value) => {
    const updatedConfigs = [...questionConfigs];
    updatedConfigs[index][field] = value;
    setQuestionConfigs(updatedConfigs);
  };

  // Add a new question config row
  const addConfigRow = () => {
    setQuestionConfigs([...questionConfigs, { type: '', quantity: '' }]);
  };

  // Remove a question config row
  const removeConfigRow = (index) => {
    const updatedConfigs = questionConfigs.filter((_, i) => i !== index);
    setQuestionConfigs(updatedConfigs);
  };

  // Submit the form
  const handleSubmit = () => {
    const payload = {
      class: classValue,
      chapter: chapterName,
      configs: questionConfigs,
    };
    console.log('QP Configuration:', payload);
    // Call your API here with the payload
  };

  return (
    <Box sx={{ p: 3, border: '1px solid #ddd', borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        QP Configuration
      </Typography>

      {/* Class Dropdown and Chapter Name Input */}
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 3 }}>
        <Select
          fullWidth
          value={classValue}
          onChange={handleClassChange}
          displayEmpty
          sx={{ backgroundColor: '#fff' }}
        >
          <MenuItem value="" disabled>
            Select Class
          </MenuItem>
          {Array.from({ length: 12 }, (_, i) => (
            <MenuItem key={i + 1} value={i + 1}>
              Class {i + 1}
            </MenuItem>
          ))}
        </Select>
        <TextField
          fullWidth
          label="Enter Chapter Name"
          value={chapterName}
          onChange={handleChapterChange}
        />
      </Stack>

      {/* Dynamic Question Config Rows */}
      <Stack spacing={2} sx={{ mb: 3 }}>
        {questionConfigs.map((config, index) => (
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            key={index}
          >
            <Select
              fullWidth
              value={config.type}
              onChange={(e) =>
                handleConfigChange(index, 'type', e.target.value)
              }
              displayEmpty
              sx={{ backgroundColor: '#fff' }}
            >
              <MenuItem value="" disabled>
                Select Question Type
              </MenuItem>
              <MenuItem value="Multiple Choice Questions">Multiple Choice Questions</MenuItem>
              <MenuItem value="Fill in the blanks">Fill in the Blanks</MenuItem>
              <MenuItem value="Name the following">Name the Following</MenuItem>
              <MenuItem value="True or False">True or False</MenuItem>
              <MenuItem value="Short Answer Questions">Short Answer Questions</MenuItem>
              <MenuItem value="Long Answer Questions">Long Answer Questions</MenuItem>
            </Select>
            <TextField
              fullWidth
              type="number"
              label="Quantity"
              value={config.quantity}
              onChange={(e) =>
                handleConfigChange(index, 'quantity', e.target.value)
              }
            />
            <IconButton
              color="error"
              onClick={() => removeConfigRow(index)}
              disabled={questionConfigs.length === 1}
            >
              <DeleteIcon />
            </IconButton>
          </Stack>
        ))}
      </Stack>

      {/* Add Config Button */}
      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Button
          variant="outlined"
          startIcon={<AddCircleIcon />}
          onClick={addConfigRow}
        >
          Add More Questions
        </Button>
      </Box>

      {/* Generate QP Button */}
      <Box sx={{ textAlign: 'right' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ paddingX: 4 }}
        >
          Generate QP
        </Button>
      </Box>
    </Box>
  );
};

export default QPConfiguration;
