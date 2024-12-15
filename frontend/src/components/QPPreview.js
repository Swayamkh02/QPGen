import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Document, Packer, Paragraph, TextRun } from 'docx';

const QPPreview = ({ qpContentFromParent }) => {
  const [qpContent, setQPContent] = useState('');

  // Sample content if no QP content is provided
  const sampleContent = `
    Class: 10th
    Chapter: Algebra

    1. What is 2 + 2? (MCQ)
    a) 3
    b) 4
    c) 5
    Answer: b) 4

    2. Solve for x: x + 5 = 10 (Fill in the Blanks)
    Answer: 5
  `;

  // Use effect to set the QP content, prioritizing parent props over default
  useEffect(() => {
    if (qpContentFromParent) {
      setQPContent(qpContentFromParent);
    } else {
      setQPContent(sampleContent);
    }
  }, [qpContentFromParent]);

  // Function to download QP as Word file
  const downloadQP = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun("Generated Question Paper\n"), // Title
                new TextRun(qpContent), // Break after title
              ],
            }),
          ],
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

      {/* Display the Question Paper Preview */}
      <Box sx={{ border: '1px solid #ddd', borderRadius: 2, p: 2, mb: 2 }}>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
          {qpContent}
        </Typography>
      </Box>

      {/* Download QP Button */}
      <Box sx={{ textAlign: 'right' }}>
        <Button
          variant="contained"
          color="primary"
          onClick={downloadQP}
          sx={{ paddingX: 4 }}
          disabled={!qpContent} // Disable if no QP content is available
        >
          Download QP
        </Button>
      </Box>
    </Box>
  );
};

export default QPPreview;
