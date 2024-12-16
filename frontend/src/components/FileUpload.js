import React, { useState } from 'react';
import { Box, Button, Typography, List, ListItem, ListItemText } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ClearIcon from '@mui/icons-material/Clear';

const FileUpload = ({files,setFiles,setFileAndChangeTab}) => {
  // const [files, setFiles] = useState([]);

  // Handle file selection and filter by allowed types
  const handleFileChange = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    const filteredFiles = uploadedFiles.filter((file) => {
      const fileType = file.name.split('.').pop().toLowerCase();
      return fileType === 'pdf' || fileType === 'txt';
    });

    if (filteredFiles.length < uploadedFiles.length) {
      alert('Only .pdf or .txt files are allowed.');
    }

    setFiles((prevFiles) => [...prevFiles, ...filteredFiles]);
  };

  // Clear all selected files
  const clearFiles = () => {
    setFiles([]);
  };

  return (
    <Box sx={{ p: 3, border: '1px solid #ddd', borderRadius: 2, textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>
        Upload Files
      </Typography>

      {/* File Upload Button */}
      <Button
        variant="contained"
        component="label"
        startIcon={<UploadFileIcon />}
        sx={{ marginBottom: 2, marginRight: 2 }}
      >
        Choose Files
        <input
          type="file"
          multiple
          hidden
          onChange={handleFileChange}
        />
      </Button>

      {/* Clear Files Button */}
      <Button
        variant="outlined"
        startIcon={<ClearIcon />}
        color="error"
        onClick={clearFiles}
        disabled={files.length === 0}
        sx={{ marginBottom: 2 }}
      >
        Clear Files
      </Button>

      {/* Display Uploaded Files */}
      {files.length > 0 ? (
        <Box>
          <Typography variant="subtitle1" gutterBottom>
            Uploaded Files:
          </Typography>
          <List>
            {files.map((file, index) => (
              <ListItem key={index}>
                <ListItemText primary={file.name} />
              </ListItem>
            ))}
          </List>
        </Box>
      ) : (
        <Typography variant="body2" color="textSecondary">
          No files uploaded yet.
        </Typography>
      )}
      <Box sx={{ textAlign: 'right' }}>
        <Button
          variant="contained"
          // startIcon={<ClearIcon />}
          color="primary"
          onClick={setFileAndChangeTab}
          disabled={files.length === 0}
          sx={{ marginBottom: 2 }}
        >
          Upload and Make QP
        </Button>
      </Box>
    </Box>
  );
};

export default FileUpload;
