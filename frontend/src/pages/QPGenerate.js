import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';

import FileUpload from '../components/FileUpload';
import QPConfiguration from '../components/QPConfiguration';
import QPPreview from '../components/QPPreview';

const QPGenerate = () => {
  const [activeTab, setActiveTab] = useState(0);

  //file-upload
  const [files, setFiles] = useState([]);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const setFileAndChangeTab = () => {
    if(files.length>0){
      setActiveTab(1);
    }
  };

  return (
    <div className="main-qp-div">
      <h1>QP Generate Page</h1>
      <p>Generate Question Papers here!</p>
      <Box 
      backgroundColor='#d8d8d8' 
      margin={'3%'} 
      minHeight={'60vh'}
      sx={{
        // borderRadius:'12px'
      }}>
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
                <FileUpload files={files} setFiles={setFiles} setFileAndChangeTab={setFileAndChangeTab}/>
            </TabPanel>
            )}
            {activeTab === 1 && (
            <TabPanel>
                <QPConfiguration/>
            </TabPanel>
            )}
            {activeTab === 2 && (
            <TabPanel>
                <QPPreview/>
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
