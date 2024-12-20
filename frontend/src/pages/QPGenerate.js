import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';

import FileUpload from '../components/FileUpload';
import QPConfiguration from '../components/QPConfiguration';
import QPPreview from '../components/QPPreview';

import '../styles/QPGenerate.css'
import Loader from '../components/Loader';

const QPGenerate = () => {
  const [activeTab, setActiveTab] = useState(0);

  //file-upload
  const [files, setFiles] = useState([]);

  //qp-configuration
  const [classValue, setClassValue] = useState('');
  const [chapterName, setChapterName] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [questionConfigs, setQuestionConfigs] = useState([
    { type: '', quantity: '' },
  ]);

  const [isLoading, setIsLoading] = useState(false); // To show a loader during API call
  const [qpData, setQPData] = useState(null); // To store the response data

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const setFileAndChangeTab = () => {
    if (files.length > 0) {
      setActiveTab(1);
    }
  };

  // API call
  const handleSubmit = async () => {
    if (files.length === 0) {
      alert("Please upload a file first.");
      return;
    }

    const payload = {
      class: classValue,
      chapter: chapterName,
      difficulty: difficulty,
      configs: questionConfigs,
    };

    try {
      setIsLoading(true);

      // Create FormData to send file + JSON data
      const formData = new FormData();
      formData.append('file', files[0]); // Attach the first file
      formData.append('data', JSON.stringify(payload)); // Attach JSON payload

      const response = await fetch('https://qpgen-lgap.onrender.com/generate_qp', {
        method: 'POST',
        body: formData, // Send formData
      });

      if (!response.ok) {
        throw new Error('Failed to generate question paper. Please try again.');
      }

      const result = await response.json();
      setQPData(result['qp']); // Store response for preview/download
      setActiveTab(2); // Move to QP Preview tab
      console.log('QP Generation Success:', result);
    } catch (error) {
      console.error('Error generating QP:', error);
      alert('Error generating question paper.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="main-qp-div">
      <h1 className="qp-title">Question Paper Generator</h1>
      <p className="qp-subtitle">Easily generate customized question papers</p>
      <Box className="qp-container" backgroundColor="#ddefff" margin={'3%'} minHeight={'60vh'}>
        {/* Tabs */}
        <Box sx={{ width: '100%', marginTop: 3 }}>
        <Tabs
          value={activeTab}
          onChange={handleChange}
          centered={false} 
          variant="scrollable" 
          scrollButtons="auto"
          sx={{
            '& .MuiTab-root': {
              fontSize: { xs: '0.75rem', sm: '1rem' }, 
              minWidth: { xs: '80px', sm: '120px' },
              padding: { xs: '6px', sm: '12px' }, 
            },
          }}
        >
            <Tab label="File Upload" />
            <Tab label="QP Configuration" disabled={!files.length>0}/>
            <Tab label="QP Preview & Download" disabled={!qpData}/>
          </Tabs>
        </Box>

        {/* Tab Content */}
        <Box sx={{ marginTop: 4 }}>
          {activeTab === 0 && (
            <TabPanel>
              <FileUpload
                files={files}
                setFiles={setFiles}
                setFileAndChangeTab={setFileAndChangeTab}
              />
            </TabPanel>
          )}
          {activeTab === 1 && (
            <TabPanel>
              {!isLoading ?
              <QPConfiguration
                classValue={classValue}
                chapterName={chapterName}
                difficulty={difficulty}
                questionConfigs={questionConfigs}
                setClassValue={setClassValue}
                setChapterName={setChapterName}
                setDifficulty={setDifficulty}
                setQuestionConfigs={setQuestionConfigs}
                handleSubmit={handleSubmit}
              />
              :
              <Loader/>
              }
            </TabPanel>
          )}
          {activeTab === 2 && (
            <TabPanel>
              <QPPreview qpContentFromParent={qpData} />
            </TabPanel>
          )}
        </Box>
      </Box>
    </div>
  );
};

const TabPanel = ({ children }) => {
  return <Box sx={{ p: 3 }}>{children}</Box>;
};

export default QPGenerate;
