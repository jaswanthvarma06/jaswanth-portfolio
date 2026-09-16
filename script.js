const { useState } = React; 

function App() {
  const [page, setPage] = useState('home');
  const [activeMediaProject, setActiveMediaProject] = useState(null);

  const projects = [
    {
      id: 'sems',
      title: 'Student Event Management (SEMS)',
      description: 'A full-stack campus management platform for event organization, registration tracking, and user role administration.',
      link: 'https://sems-frontend-chi.vercel.app',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      hasShowcase: false
    },
    {
      id: 'digits',
      title: 'Handwritten Digit Recognition',
      description: 'A deep learning model trained on the MNIST dataset using CNNs to recognize and classify handwritten digits in real time.',
      link: 'https://handwritten-digit-recognition-zei5.onrender.com',
      tags: ['Python', 'TensorFlow/Keras', 'CNN', 'OpenCV'],
      hasShowcase: false
    },
    {
      id: 'fuel',
      title: 'On-Demand Fuel Delivery',
      description: 'An interactive web application styled like top food delivery apps, allowing users to request fuel on-demand with location pinning and tracking.',
      link: '#',
      tags: ['React', 'Node.js', 'UI/UX', 'Geolocation'],
      hasShowcase: true
    },
    {
      id: 'rpg',
      title: 'ISEKAI Guild RPG',
      description: 'An interactive 3D RPG game project developed in Godot engine with custom asset pipelines and mechanics.',
      link: '#',
      tags: ['Godot Engine', '3D Modeling', 'Game Dev'],
      hasShowcase: true
    },
    {
      id: 'deeptrace',
      title: 'DeepTrace - AI Voice Detection',
      description: 'Real-time deepfake audio detection architecture designed for financial verification safety.',
      link: 'https://github.com/jaswanthvarma06',
      tags: ['Python', 'AI/ML', 'Audio Processing'],
      hasShowcase: false
    },
    {
      id: 'visuals',
      title: 'JV Creations Visual Studio',
      description: 'Visual media and editing portfolio showcasing VFX pipeline integrations, Blender rendering, and motion graphics.',
      link: 'https://github.com/jaswanthvarma06',
      tags: ['Blender', 'VFX', 'Video Editing'],
      hasShowcase: false
    }
  ];

  const mediaData = {
    rpg: {
      title: 'ISEKAI Guild RPG Showcase',
      description: 'Explore gameplay previews, environment builds, and 3D character design assets.',
      images: [
        { src: 'rpg-1.jpg', alt: '3D Gameplay Environment' },
        { src: 'rpg-2.jpg', alt: 'Character & Boss Rigging' },
        { src: 'rpg-3.jpg', alt: 'Inventory & Quest System' }
      ],
      video: 'rpg-gameplay.mp4'
    },
    fuel: {
      title: 'On-Demand Fuel Delivery App',
      description: 'A seamless UI workflow showcasing map geolocation, fuel selection, and order delivery confirmation.',
      images: [
        { src: 'fuel-1.jpg', alt: 'App Home & Order Dashboard' },
        { src: 'fuel-2.jpg', alt: 'Pin Location Selection Map' },
        { src: 'fuel-3.jpg', alt: 'Live Delivery Status Page' }
      ],
      video: null
    }
  };

  return (
    <div className="portfolio-card">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo" onClick={() => { setPage('home'); setActiveMediaProject(null); }}>
          JASWANTH<span className="logo-dot">.</span>
        </div>
        <div className="nav-links">
          <button className={`nav-btn ${page === 'home' && !activeMediaProject ? 'active' : ''}`} onClick={() => { setPage('home'); setActiveMediaProject(null); }}>Home</button>
          <button className={`nav-btn ${page === 'about' ? 'active' : ''}`} onClick={() => { setPage('about'); setActiveMediaProject(null); }}>About</button>
          <button className={`nav-btn ${page === 'projects' || activeMediaProject ? 'active' : ''}`} onClick={() => { setPage('projects'); setActiveMediaProject(null); }}>Projects</button>
          <button className={`nav-btn ${page === 'contact' ? 'active' : ''}`} onClick={() => { setPage('contact'); setActiveMediaProject(null); }}>Contact</button>
        </div>
        <button className="talk-btn" onClick={() => { setPage('contact'); setActiveMediaProject(null); }}>Let's Talk</button>
      </nav>

      {/* MEDIA SHOWCASE PAGE OVERLAY */}
      {activeMediaProject && mediaData[activeMediaProject] && (
        <div className="showcase-container">
          <button className="back-btn" onClick={() => setActiveMediaProject(null)}>← Back to Projects</button>
          <h2 className="page-title">{mediaData[activeMediaProject].title}</h2>
          <p className="showcase-desc">{mediaData[activeMediaProject].description}</p>

          {mediaData[activeMediaProject].video && (
            <div className="media-box">
              <h3 className="section-subtitle">Video Preview</h3>
              <video controls className="showcase-video">
                <source src={mediaData[activeMediaProject].video} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>
          )}

          <div className="media-box">
            <h3 className="section-subtitle">Screenshots & UI Previews</h3>
            <div className="gallery-grid">
              {mediaData[activeMediaProject].images.map((img, index) => (
                <div key={index} className="gallery-card">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="gallery-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML = `<div class="img-placeholder"><span>[ Image: ${img.alt} ]</span></div>`;
                    }}
                  />
                  <p className="img-caption">{img.alt}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* PAGE: HOME */}
      {page === 'home' && !activeMediaProject && (
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
              <a href="https://github.com/jaswanthvarma06" target="_blank" rel="noreferrer" className="action-btn purple-border">GITHUB ↗</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/jaswanthvarma06" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/jaswanth-varma/" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              <a href="mailto:jashuvarma2310@gmail.com" className="social-icon"><i className="far fa-envelope"></i></a>
            </div>
          </div>

          <div className="hero-photo">
            <div className="photo-ring">
              <img 
                src="profile.png" 
                alt="Jaswanth Varma" 
                className="profile-img"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<div style="color:#a855f7; font-weight:bold;"><i class="fas fa-user-circle fa-4x"></i></div>';
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* PAGE: PROJECTS */}
      {page === 'projects' && !activeMediaProject && (
        <div>
          <h2 className="page-title">My <span className="purple-text">Projects</span></h2>
          <div className="projects-grid">
            {projects.map((proj) => (
              <div key={proj.id} className="project-card">
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

                  {proj.hasShowcase ? (
                    <button className="proj-link showcase-btn" onClick={() => setActiveMediaProject(proj.id)}>
                      View Media & Screenshots 🎬
                    </button>
                  ) : (
                    <a href={proj.link} target="_blank" rel="noreferrer" className="proj-link">
                      View Project ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PAGE: ABOUT */}
      {page === 'about' && !activeMediaProject && (
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
      {page === 'contact' && !activeMediaProject && (
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
