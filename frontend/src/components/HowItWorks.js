import React from "react";
import { FormatListBulleted, AddCircle, Tune, Download } from "@mui/icons-material";

const HowItWorks = () => (
  <section className="how-it-works">
    <h2>How It Works</h2>
    <div className="steps">
      <div className="step">
        <FormatListBulleted sx={{ fontSize: "3rem", color: "#4caf50" }} />
        <h3>Select Question Type</h3>
        <p>Choose the type of questions you want to include.</p>
      </div>
      <div className="step">
        <AddCircle sx={{ fontSize: "3rem", color: "#2196f3" }} />
        <h3>Add Your Questions</h3>
        <p>Input your questions and answers easily.</p>
      </div>
      <div className="step">
        <Tune sx={{ fontSize: "3rem", color: "#ff9800" }} />
        <h3>Customize the Layout</h3>
        <p>Adjust the formatting and appearance of your paper.</p>
      </div>
      <div className="step">
        <Download sx={{ fontSize: "3rem", color: "#f44336" }} />
        <h3>Generate and Download</h3>
        <p>Download your ready-to-use question paper.</p>
      </div>
    </div>
  </section>
);

export default HowItWorks;
