import React, { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('home');

  const projects = [
    {
      title: 'Student Event Management (SEMS)',
      description: 'A full-stack campus management platform for event organization, registration tracking, and user role administration.',
      link: 'https://sems-frontend-chi.vercel.app',
      tags: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      title: 'DeepTrace - AI Voice Detection',
      description: 'Real-time deepfake audio detection architecture designed for financial verification safety.',
      link: 'https://github.com',
      tags: ['Python', 'AI/ML', 'Audio Processing']
    },
    {
      title: 'ISEKAI Guild RPG',
      description: 'An interactive 3D RPG game project developed in Godot engine with custom asset pipelines.',
      link: 'https://github.com',
      tags: ['Godot Engine', '3D Modeling', 'Game Dev']
    },
    {
      title: 'JV Creations Visual Studio',
      description: 'Visual media and editing portfolio showcasing VFX pipeline integrations, Blender rendering, and motion graphics.',
      link: 'https://github.com',
      tags: ['Blender', 'VFX', 'Video Editing']
    }
  ];

  return (
    <div className="portfolio-card">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo" onClick={() => setPage('home')}>
          JASWANTH<span className="logo-dot">.</span>
        </div>
        <div className="nav-links">
          <button className={`nav-btn ${page === 'home' ? 'active' : ''}`} onClick={() => setPage('home')}>Home</button>
          <button className={`nav-btn ${page === 'about' ? 'active' : ''}`} onClick={() => setPage('about')}>About</button>
          <button className={`nav-btn ${page === 'projects' ? 'active' : ''}`} onClick={() => setPage('projects')}>Projects</button>
          <button className={`nav-btn ${page === 'contact' ? 'active' : ''}`} onClick={() => setPage('contact')}>Contact</button>
        </div>
        <button className="talk-btn" onClick={() => setPage('contact')}>Let's Talk</button>
      </nav>

      {/* PAGE: HOME */}
      {page === 'home' && (
        <div className="hero">
          <div className="hero-content">
            <p className="greeting">Hi, I'm Jaswanth Varma!</p>
            <h1 className="title-heading">
              AI & ML <span className="purple-text">STUDENT</span>
            </h1>
            <p className="subtext">
              Specializing in Artificial Intelligence and Machine Learning. Passionate about engineering smart applications, computer vision models, and full-stack web solutions.
            </p>
            <div className="btn-group">
              <button className="action-btn" onClick={() => setPage('projects')}>PROJECTS &lt;/&gt;</button>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="action-btn purple-border">GITHUB ↗</a>
            </div>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon">GH</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon">IN</a>
              <a href="mailto:contact@example.com" className="social-icon">@</a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="photo-ring">
              <img 
                src="/profile.jpg" 
                alt="Jaswanth Varma" 
                className="profile-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<div style="color:#a855f7; font-weight:bold;">[ PHOTO ]</div>';
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* PAGE: PROJECTS */}
      {page === 'projects' && (
        <div>
          <h2 className="page-title">My <span className="purple-text">Projects</span></h2>
          <div className="projects-grid">
            {projects.map((proj, idx) => (
              <div key={idx} className="project-card">
                <div>
                  <h3 className="proj-title">{proj.title}</h3>
                  <p className="proj-desc">{proj.description}</p>
                </div>
                <div>
                  <div className="tags">
                    {proj.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                  <a href={proj.link} target="_blank" rel="noreferrer" className="proj-link">
                    View Project ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PAGE: ABOUT */}
      {page === 'about' && (
        <div>
          <h2 className="page-title">About <span className="purple-text">Me</span></h2>
          <div className="info-card">
            <p style={{ color: '#cbd5e1', lineHeight: '1.7', marginBottom: '20px' }}>
              I am an Artificial Intelligence & Machine Learning student dedicated to engineering full-stack solutions, deepfake detection models, and 3D visual experiences.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
              <div style={{ background: '#100e1f', padding: '15px', borderRadius: '10px' }}>
                <h4 style={{ color: '#a855f7', marginBottom: '8px' }}>Core Skills</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Python, Machine Learning, React, Node.js, MongoDB</p>
              </div>
              <div style={{ background: '#100e1f', padding: '15px', borderRadius: '10px' }}>
                <h4 style={{ color: '#a855f7', marginBottom: '8px' }}>Tools & Dev</h4>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>Git, Godot Engine, Blender, Flask, Express</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PAGE: CONTACT */}
      {page === 'contact' && (
        <div>
          <h2 className="page-title">Get In <span className="purple-text">Touch</span></h2>
          <div className="info-card">
            <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
              <input type="text" placeholder="Your Name" className="input-box" required />
              <input type="email" placeholder="Your Email" className="input-box" required />
              <textarea placeholder="Your Message" className="input-box" style={{ height: '100px' }} required></textarea>
              <button type="submit" className="talk-btn">Send Message</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
