import React from 'react';
import { ListAlt, DesignServices, EmojiPeople, SaveAlt } from "@mui/icons-material";
import { FormatListBulleted, AddCircle, Tune, Download } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/qp-generate');
  };

  return (
    <div className="home-container" style={{ paddingTop: '20px', padding: '30px' }}>
      {/* Hero Section */}
      <section className="hero" style={{
        background: 'linear-gradient(to right, #4facfe80, #00f1fe7d)', 
        padding: '40px', 
        height: '75vh', 
        textAlign: 'center', 
        justifyContent: 'center', 
        alignItems: 'center', 
        display: 'flex',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)', // Soft shadow
        border: 'none', // Removed the border for a cleaner look
        overflow: 'hidden', // Ensures that the rounded corners are clean
      }}>

        <div className="hero-content" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ color: '#f1faee', fontSize: '2.5rem' }}>Create Custom Question Papers in Minutes</h1>
          <p style={{ color: '#f1faee', fontSize: '1.2rem' }}>Our easy-to-use tool helps you generate professional-looking question papers for any subject or level.</p>
          <button className="cta-button" style={{
            backgroundColor: '#e63946', 
            color: 'white', 
            padding: '10px 20px', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            marginTop: '20px', 
            fontSize: '1rem'
          }} onClick={handleClick}>Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" style={{ padding: '40px 0' }}>
        <h2 style={{ color: '#1d3557', fontSize: '2rem', textAlign: 'center' }}>Key Features</h2>
        <div className="features-grid" style={{
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '20px'
        }}>
          <div className="feature" style={{
            border: '1px solid #a8dadc', 
            padding: '20px', 
            textAlign: 'center', 
            borderRadius: '8px', 
            backgroundColor: '#e1f5fe'
          }}>
            <ListAlt sx={{ fontSize: "3rem", color: "#4caf50" }} />
            <h3 style={{ color: '#1d3557' }}>Variety of Question Types</h3>
            <p>Choose from multiple choice, true/false, short answer, and more.</p>
          </div>
          <div className="feature" style={{
            border: '1px solid #a8dadc', 
            padding: '20px', 
            textAlign: 'center', 
            borderRadius: '8px', 
            backgroundColor: '#e1f5fe'
          }}>
            <DesignServices sx={{ fontSize: "3rem", color: "#2196f3" }} />
            <h3 style={{ color: '#1d3557' }}>Customizable Layouts</h3>
            <p>Design your question paper with different fonts, sizes, and layouts.</p>
          </div>
          <div className="feature" style={{
            border: '1px solid #a8dadc', 
            padding: '20px', 
            textAlign: 'center', 
            borderRadius: '8px', 
            backgroundColor: '#e1f5fe'
          }}>
            <EmojiPeople sx={{ fontSize: "3rem", color: "#ff9800" }} />
            <h3 style={{ color: '#1d3557' }}>Easy to Use Interface</h3>
            <p>Our intuitive interface makes creating question papers a breeze.</p>
          </div>
          <div className="feature" style={{
            border: '1px solid #a8dadc', 
            padding: '20px', 
            textAlign: 'center', 
            borderRadius: '8px', 
            backgroundColor: '#e1f5fe'
          }}>
            <SaveAlt sx={{ fontSize: "3rem", color: "#f44336" }} />
            <h3 style={{ color: '#1d3557' }}>Save and Export Options</h3>
            <p>Save your question papers in various formats like PDF and DOCX.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" style={{ padding: '40px 0' }}>
        <h2 style={{ color: '#1d3557', fontSize: '2rem', textAlign: 'center' }}>How It Works</h2>
        <div className="steps" style={{
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px', 
          textAlign: 'center'
        }}>
          <div className="step" style={{
            padding: '20px', 
            border: '1px solid #a8dadc', 
            borderRadius: '8px', 
            backgroundColor: '#e1f5fe'
          }}>
            <FormatListBulleted sx={{ fontSize: "3rem", color: "#4caf50" }} />
            <h3 style={{ color: '#1d3557' }}>Select Question Type</h3>
            <p>Choose the type of questions you want to include.</p>
          </div>
          <div className="step" style={{
            padding: '20px', 
            border: '1px solid #a8dadc', 
            borderRadius: '8px', 
            backgroundColor: '#e1f5fe'
          }}>
            <AddCircle sx={{ fontSize: "3rem", color: "#2196f3" }} />
            <h3 style={{ color: '#1d3557' }}>Add Your Questions</h3>
            <p>Input your questions and answers easily.</p>
          </div>
          <div className="step" style={{
            padding: '20px', 
            border: '1px solid #a8dadc', 
            borderRadius: '8px', 
            backgroundColor: '#e1f5fe'
          }}>
            <Tune sx={{ fontSize: "3rem", color: "#ff9800" }} />
            <h3 style={{ color: '#1d3557' }}>Customize the Layout</h3>
            <p>Adjust the formatting and appearance of your paper.</p>
          </div>
          <div className="step" style={{
            padding: '20px', 
            border: '1px solid #a8dadc', 
            borderRadius: '8px', 
            backgroundColor: '#e1f5fe'
          }}>
            <Download sx={{ fontSize: "3rem", color: "#f44336" }} />
            <h3 style={{ color: '#1d3557' }}>Generate and Download</h3>
            <p>Download your ready-to-use question paper.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta" style={{ textAlign: 'center', padding: '40px', backgroundColor: '#e9ecef' }}>
        <h2 style={{ color: '#1d3557' }}>Ready to Get Started?</h2>
        <p style={{ color: '#1d3557' }}>Create professional question papers quickly and easily.</p>
        <button className="cta-button" style={{
          backgroundColor: '#e63946', 
          color: 'white', 
          padding: '10px 20px', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer', 
          marginTop: '20px', 
          fontSize: '1rem'
        }} onClick={handleClick}>Let's Generate</button>
      </section>
    </div>
  );
};

export default Home;
