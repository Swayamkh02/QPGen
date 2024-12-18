import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';

import FileUpload from '../components/FileUpload';
import QPConfiguration from '../components/QPConfiguration';
import QPPreview from '../components/QPPreview';

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

      const response = await fetch('http://127.0.0.1:8500/generate_qp', {
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
      <h1>QP Generate Page</h1>
      <p>Generate Question Papers here!</p>
      <Box backgroundColor="#d8d8d8" margin={'3%'} minHeight={'60vh'}>
        {/* Tabs */}
        <Box sx={{ width: '100%', marginTop: 3 }}>
          <Tabs value={activeTab} onChange={handleChange} centered>
            <Tab label="File Upload" />
            <Tab label="QP Configuration" />
            <Tab label="QP Preview & Download" />
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
              {isLoading && <p>Generating Question Paper...</p>}
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
