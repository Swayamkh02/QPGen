import React from "react";
import { ListAlt, DesignServices, EmojiPeople, SaveAlt } from "@mui/icons-material";

const Features = () => (
  <section className="features">
    <h2>Key Features</h2>
    <div className="features-grid">
      <div className="feature">
        <ListAlt sx={{ fontSize: "3rem", color: "#4caf50" }} />
        <h3>Variety of Question Types</h3>
        <p>Choose from multiple choice, true/false, short answer, and more.</p>
      </div>
      <div className="feature">
        <DesignServices sx={{ fontSize: "3rem", color: "#2196f3" }} />
        <h3>Customizable Layouts</h3>
        <p>Design your question paper with different fonts, sizes, and layouts.</p>
      </div>
      <div className="feature">
        <EmojiPeople sx={{ fontSize: "3rem", color: "#ff9800" }} />
        <h3>Easy to Use Interface</h3>
        <p>Our intuitive interface makes creating question papers a breeze.</p>
      </div>
      <div className="feature">
        <SaveAlt sx={{ fontSize: "3rem", color: "#f44336" }} />
        <h3>Save and Export Options</h3>
        <p>Save your question papers in various formats like PDF and DOCX.</p>
      </div>
    </div>
  </section>
);

export default Features;
