import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <button 
        className="theme-toggle" 
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        <span className="theme-icon">{darkMode ? '☀️' : '🌙'}</span>
      </button>

      <header className="App-header">
        <div className="header-content">
          <img src="/michael.png" alt="Profile" className="profile-image" />
          <h1 className="name-title">Michael Chen</h1>
          <h2 className="role-subtitle">Full Stack Developer with Mobile App Specialization</h2>
          <p className="tagline">Building beautiful, functional experiences on the web</p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">View Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="scroll-indicator">↓</div>
      </header>
      
      <main className="App-main">
        <section className="about" id="about">
          <div className="section-header">
            <span className="section-label">Introduction</span>
            <h2>About Me</h2>
          </div>
          <div className="about-content">
            <p>Computer Engineer specializing in native mobile app development for Android and iOS using Kotlin, Java, Swift, and Kotlin Multiplatform Mobile.</p>
            <p>Passionate about data science, machine learning, and IoT. Currently building educational technology at Quipper Edukasi Indonesia.</p>
            <p>Seeking opportunities to contribute mobile development expertise to dynamic teams building impactful products.</p>
          </div>
        </section>
        
        <section className="skills" id="skills">
          <div className="section-header">
            <span className="section-label">Expertise</span>
            <h2>Skills & Technologies</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <div className="skill-icon">💻</div>
              <h3>Programming Languages</h3>
              <ul>
                <li>Kotlin, Java</li>
                <li>Swift, Python</li>
                <li>PHP, Go</li>
              </ul>
            </div>
            <div className="skill-category">
              <div className="skill-icon">📱</div>
              <h3>Mobile & Frameworks</h3>
              <ul>
                <li>Android Native (Kotlin/Java)</li>
                <li>iOS Native (SwiftUI)</li>
                <li>Kotlin Multiplatform Mobile</li>
                <li>React, Laravel</li>
              </ul>
            </div>
            <div className="skill-category">
              <div className="skill-icon">🛠️</div>
              <h3>Tools & Platforms</h3>
              <ul>
                <li>Git, GitHub</li>
                <li>Firebase, ADB</li>
                <li>Android Studio, Xcode</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section className="projects" id="projects">
          <div className="section-header">
            <span className="section-label">Work</span>
            <h2>Featured Projects</h2>
          </div>
          <div className="project-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="/music-player.png" alt="Music Player Project" />
              </div>
              <div className="project-content">
                <h3>Music Streaming App</h3>
                <p>A full-featured music player with real-time streaming, playlists, and social features. Built with Android native.</p>
                <div className="project-tags">
                  <span className="tag">Android</span>
                  <span className="tag">Java</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">Live Demo →</a>
                  <a href="#" className="project-link">GitHub →</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/quipper.png" alt="Quipper Student Learning System" />
              </div>
              <div className="project-content">
                <span className="company-badge">Quipper Edukasi Indonesia</span>
                <h3>Student Learning System</h3>
                <p>Develop and maintain features of the Android and iOS Student Learning System, providing educational content and tools to students.</p>
                <div className="project-tags">
                  <span className="tag">Android</span>
                  <span className="tag">iOS</span>
                  <span className="tag">Kotlin</span>
                  <span className="tag">Swift</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">View Details →</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/lim.png" alt="Lingkar Inovasi Muda Medicine Reminder PWA" />
              </div>
              <div className="project-content">
                <span className="company-badge">Lingkar Inovasi Muda</span>
                <h3>Medicine Reminder PWA</h3>
                <p>Flutter-based PWA for medicine reminders using FCM, with a Laravel + Livewire admin dashboard for managing patient schedules.</p>
                <div className="project-tags">
                  <span className="tag">Flutter</span>
                  <span className="tag">Laravel</span>
                  <span className="tag">Livewire</span>
                  <span className="tag">FCM</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">View Details →</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/eratani.png" alt="Eratani Internal Android Applications" />
              </div>
              <div className="project-content">
                <span className="company-badge">Eratani Teknologi Nusantara</span>
                <h3>Internal Android Applications</h3>
                <p>Develop and maintain internal Android applications for farmers, kiosk merchants, and internal teams (Sales, Acquisition, Operation, Supply Chain).</p>
                <div className="project-tags">
                  <span className="tag">Android</span>
                  <span className="tag">Kotlin</span>
                  <span className="tag">Java</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">View Details →</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/barangbaku.png" alt="BarangBaku Marketplace" />
              </div>
              <div className="project-content">
                <span className="company-badge">Barangbaku</span>
                <h3>BarangBaku Marketplace</h3>
                <p>Mobile application for Android and iOS enabling users to purchase and sell raw/semi-raw goods with seamless marketplace features.</p>
                <div className="project-tags">
                  <span className="tag">Android</span>
                  <span className="tag">iOS</span>
                  <span className="tag">Mobile</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">View Details →</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/fl.png" alt="Federated Learning Scam Classifier" />
              </div>
              <div className="project-content">
                <span className="company-badge">Open Source</span>
                <h3>Federated Learning Scam Classifier</h3>
                <p>Machine learning model trained in a federated fashion for binary classification between scam and non-scam messages using PySyft and PyTorch.</p>
                <div className="project-tags">
                  <span className="tag">PySyft</span>
                  <span className="tag">PyTorch</span>
                  <span className="tag">ML</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">GitHub →</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/trashcan.jpg" alt="Smart Trash Can" />
              </div>
              <div className="project-content">
                <span className="company-badge">Personal Project</span>
                <h3>Smart Trash Can</h3>
                <p>IoT device with on-device ML inference to classify organic vs inorganic trash using Raspberry Pi camera. Includes web dashboard and API backend.</p>
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">Go</span>
                  <span className="tag">React</span>
                  <span className="tag">Raspberry Pi</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">View Details →</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/inventory_tracker.jpg" alt="Inventory Tracker" />
              </div>
              <div className="project-content">
                <span className="company-badge">Personal Project</span>
                <h3>Inventory Tracker</h3>
                <p>Embedded system using RFID tag reader on Raspberry Pi to track laboratory equipment and automatically sync data to Google Sheets.</p>
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">Raspberry Pi</span>
                  <span className="tag">RFID</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">GitHub →</a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img src="/useit.png" alt="UseIt IT Support" />
              </div>
              <div className="project-content">
                <span className="company-badge">Personal Project</span>
                <h3>UseIt IT Support</h3>
                <p>Real-time private one-on-one chat application for IT support with Firebase backend and Android Native implementation.</p>
                <div className="project-tags">
                  <span className="tag">Android</span>
                  <span className="tag">Java</span>
                  <span className="tag">Firebase</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">GitHub →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="section-header">
            <span className="section-label">Get In Touch</span>
            <h2>Let's Work Together</h2>
          </div>
          <div className="contact-content">
            <p>I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!</p>
            <div className="social-links">
              <a href="https://github.com/michaelchen27" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="/github-logo.svg" alt="GitHub" className="social-logo" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin-logo.svg" alt="LinkedIn" className="social-logo" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:michael.chen2701@gmail.com" className="social-link">
                <img src="/gmail-logo.svg" alt="Gmail" className="social-logo" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="App-footer">
        <p>© 2026 Michael Chen. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
