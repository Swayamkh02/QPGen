import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import MarkdownIt from 'markdown-it';
import ReactMarkdown from 'react-markdown'; 

const QPPreview = ({ qpContentFromParent }) => {
  const [qpContent, setQPContent] = useState('');
  const mdParser = new MarkdownIt(); // Initialize markdown-it

  const sampleContent = `
    ## Generated Question Paper

    ### Section A: Multiple Choice Questions (10)
    1. What makes things visible?  
       a) Light and eyes only  
       b) Light and other objects  
       c) Eyes alone  
       d) Light alone  
       **Answer:** a) Light and eyes only  

    2. According to the laws of reflection, what is true about the angle of incidence and the angle of reflection?  
       a) The angle of incidence is always greater than the angle of reflection  
       b) The angle of incidence is always less than the angle of reflection  
       c) The angle of incidence is equal to the angle of reflection  
       d) The angle of incidence and the angle of reflection are perpendicular to each other  
       **Answer:** c) The angle of incidence is equal to the angle of reflection  
  `;

  useEffect(() => {
    setQPContent(qpContentFromParent || sampleContent);
  }, [qpContentFromParent]);

  const parseMarkdownToDocx = (markdown) => {
    const html = mdParser.render(markdown); // Parse Markdown to HTML
    const lines = html.replace(/<\/?[^>]+(>|$)/g, '').split('\n'); // Remove HTML tags

    return lines.map((line) => new Paragraph(line.trim())); // Convert lines to docx paragraphs
  };

  const downloadQP = () => {
    const docContent = parseMarkdownToDocx(qpContent); // Convert Markdown to docx paragraphs

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: docContent, // Use parsed paragraphs
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'question_paper.docx';
      link.click();
    });
  };

  return (
    <Box sx={{ p: 3, border: '1px solid #ddd', borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        QP Preview
      </Typography>

      <Box sx={{ border: '1px solid #ddd', borderRadius: 2, p: 2, mb: 2 }}>
        <ReactMarkdown>{qpContent}</ReactMarkdown> {/* Render Markdown */}
      </Box>

      {/* Download Button */}
      <Box sx={{ textAlign: 'right' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={downloadQP}
          sx={{ paddingX: 4 }}
          disabled={!qpContent}
        >
          Download QP
        </Button>
      </Box>
    </Box>
  );
};

export default QPPreview;
