import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1 className="hero-title">Welcome to the Online Exam Portal</h1>
        <p className="hero-subtitle">Manage exams effortlessly with automation and manual modes.</p>
        <Link to="/enter-exam" className="btn primary-btn">Enter Exam Details</Link>
        <Link to="/exam-details" className="btn secondary-btn">View Exam Details</Link>
      </header>

      <section className="content-section">
        <div className="info-box">
          <h2>About This App</h2>
          <p className="info-paragraph">
            Our platform helps institutions manage exams easily, offering features like real-time statistics and user management.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Online Exam Portal</p>
      </footer>
    </div>
  );
}

export default Home;
