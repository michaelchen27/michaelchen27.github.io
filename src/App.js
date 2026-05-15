import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  const [expandedCards, setExpandedCards] = useState({});
  const [profileClickCount, setProfileClickCount] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [isHolding, setIsHolding] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const rotationRef = useRef(0);
  const animationFrameRef = useRef(null);
  const profileImageRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  useEffect(() => {
    if (!isSpinning) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      // Reset transform when not spinning
      if (profileImageRef.current) {
        profileImageRef.current.style.transform = isHovering ? 'scale(1.05)' : 'scale(1)';
      }
      return;
    }

    const animate = () => {
      const speed = isHolding ? 10 : 2; // degrees per frame
      rotationRef.current = (rotationRef.current + speed) % 360;
      
      if (profileImageRef.current) {
        const scale = isHovering ? 1.05 : 1;
        profileImageRef.current.style.transform = `rotate(${rotationRef.current}deg) scale(${scale})`;
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isSpinning, isHolding, isHovering]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleProfileClick = () => {
    const newCount = profileClickCount + 1;
    setProfileClickCount(newCount);
    
    if (newCount === 7) {
      setIsSpinning(true);
    }
  };

  const handleMouseDown = () => {
    if (isSpinning) {
      setIsHolding(true);
    }
  };

  const handleMouseUp = () => {
    setIsHolding(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHolding(false);
    setIsHovering(false);
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    const email = 'michael.chen2701@gmail.com';
    
    // Try to open mail client
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
    
    // Copy to clipboard as fallback
    navigator.clipboard.writeText(email).then(() => {
      alert('Email copied to clipboard: ' + email);
    }).catch(() => {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = email;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      alert('Email copied to clipboard: ' + email);
    });
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
          <img 
            ref={profileImageRef}
            src="/michael.png" 
            alt="Profile" 
            className="profile-image"
            onClick={handleProfileClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: 'pointer' }}
          />
          <h1 className="name-title">Michael Chen</h1>
          <h2 className="role-subtitle">Full Stack Developer with Mobile App Specialization</h2>
          <p className="tagline">Building beautiful, functional experiences on the web</p>
          <div className="cta-buttons">
            <a href="#experience" className="btn btn-primary">View Work</a>
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
        
        <section className="experience" id="experience">
          <div className="section-header">
            <span className="section-label">Career</span>
            <h2>Work Experience</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className={`timeline-card ${expandedCards[0] ? 'expanded' : ''}`} onClick={() => toggleCard(0)}>
                  {expandedCards[0] && (
                    <div className="timeline-cover">
                      <img src="/quipper_cover.png" alt="Quipper" />
                    </div>
                  )}
                  <div className="timeline-header">
                    <img src="/quipper.jpeg" alt="Quipper" className="company-logo" />
                    <div className="timeline-info">
                      <h3>Quipper</h3>
                      <p className="position">Mobile Software Engineer<br/>Full-time</p>
                      <p className="duration">Jul 2024 - May 2026</p>
                    </div>
                    {!expandedCards[0] && <div className="expand-indicator">⌄</div>}
                  </div>
                  <div className={`timeline-details ${expandedCards[0] ? 'show' : ''}`}>
                    <p className="description">Native mobile developer for a high-scale eLearning platform, responsible for end-to-end feature delivery and maintaining a robust production environment across both Android and iOS.</p>
                    <ul className="responsibilities">
                      <li>Developed core mobile features using Kotlin/Java for Android and SwiftUI/UIKit for iOS, ensuring a consistent cross-platform user experience.</li>
                      <li>Implemented shared business logic using Kotlin Multiplatform Mobile (KMM) to improve code reuse and maintain consistency between Android and iOS platforms.</li>
                      <li>Maintained and enhanced modular internal libraries/shared SDKs to support scalable and reusable mobile architecture across teams.</li>
                      <li>Supported and refactored legacy Android (Java) and iOS (UIKit) codebases while gradually modernizing the applications with newer technologies.</li>
                      <li>Automated CI/CD pipelines using Fastlane and CircleCI, reducing manual deployment effort and improving release reliability.</li>
                      <li>Built and launched a Timed Exam module with cheating detection capabilities to support academic integrity.</li>
                      <li>Maintained a 99% crash-free rate through proactive monitoring, debugging, and issue resolution using Firebase.</li>
                    </ul>
                    <div className="project-tags">
                      <span className="tag">Kotlin</span>
                      <span className="tag">Swift</span>
                      <span className="tag">KMM</span>
                      <span className="tag">SwiftUI</span>
                      <span className="tag">Firebase</span>
                      <span className="tag">Fastlane</span>
                      <span className="tag">CircleCI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className={`timeline-card ${expandedCards[1] ? 'expanded' : ''}`} onClick={() => toggleCard(1)}>
                  {expandedCards[1] && (
                    <div className="timeline-cover">
                      <img src="/lim_cover.png" alt="Lingkar Inovasi Muda" />
                    </div>
                  )}
                  <div className="timeline-header">
                    <img src="/lim.jpeg" alt="Lingkar Inovasi Muda" className="company-logo" />
                    <div className="timeline-info">
                      <h3>Lingkar Inovasi Muda</h3>
                      <p className="position">Software Engineer<br/>Freelance</p>
                      <p className="duration">May 2024 - Jul 2024</p>
                    </div>
                    {!expandedCards[1] && <div className="expand-indicator">⌄</div>}
                  </div>
                  <div className={`timeline-details ${expandedCards[1] ? 'show' : ''}`}>
                    <p className="description">Developed an installable Flutter-based Progressive Web App (PWA) for medicine reminders, integrated with Firebase Cloud Messaging (FCM) for real-time notification delivery.</p>
                    <ul className="responsibilities">
                      <li>Built responsive and reusable UI components in Flutter based on provided design specifications.</li>
                      <li>Developed a Laravel + Livewire admin dashboard for managing doctor, patient, and medication schedule data.</li>
                      <li>Designed and maintained PostgreSQL database schemas to support patient records and scheduling workflows.</li>
                      <li>Implemented medicine reminder scheduling and push notification delivery using Firebase Cloud Messaging (FCM).</li>
                      <li>Created a fully installable PWA experience with cross-platform browser support and offline-ready capabilities.</li>
                      <li>Collaborated across frontend and backend development to deliver end-to-end healthcare management features.</li>
                    </ul>
                    <div className="project-tags">
                      <span className="tag">Flutter</span>
                      <span className="tag">Laravel</span>
                      <span className="tag">Livewire</span>
                      <span className="tag">FCM</span>
                      <span className="tag">PostgreSQL</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className={`timeline-card ${expandedCards[2] ? 'expanded' : ''}`} onClick={() => toggleCard(2)}>
                  {expandedCards[2] && (
                    <div className="timeline-cover">
                      <img src="/eratani_cover.png" alt="Eratani" />
                    </div>
                  )}
                  <div className="timeline-header">
                    <img src="/eratani.jpeg" alt="Eratani" className="company-logo" />
                    <div className="timeline-info">
                      <h3>Eratani</h3>
                      <p className="position">Android Developer<br/>Full-time</p>
                      <p className="duration">Oct 2022 - Jun 2024</p>
                    </div>
                    {!expandedCards[2] && <div className="expand-indicator">⌄</div>}
                  </div>
                  <div className={`timeline-details ${expandedCards[2] ? 'show' : ''}`}>
                    <p className="description">Developed and maintained internal Android applications used by farmers, kiosk merchants, and internal operational teams including Sales, Acquisition, Operations, Agronomists, and Supply Chain.</p>
                    <ul className="responsibilities">
                      <li>Built offline-first Android applications using pure Kotlin to support field operations in low- to no-signal environments.</li>
                      <li>Developed farmer acquisition and operational data collection features to improve field reporting and workflow efficiency.</li>
                      <li>Implemented knowledge-sharing modules enabling agronomists to upload educational content accessible to farmers in remote areas.</li>
                      <li>Designed and developed supply chain features including cart-based workflows and Budget Planning management.</li>
                      <li>Optimized local data storage and synchronization mechanisms to ensure reliable application performance under unstable network conditions.</li>
                      <li>Collaborated closely with cross-functional operational teams to translate field requirements into scalable mobile solutions.</li>
                    </ul>
                    <div className="project-tags">
                      <span className="tag">Kotlin</span>
                      <span className="tag">Flow</span>
                      <span className="tag">MVVM</span>
                      <span className="tag">Offline-First</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className={`timeline-card ${expandedCards[3] ? 'expanded' : ''}`} onClick={() => toggleCard(3)}>
                  {expandedCards[3] && (
                    <div className="timeline-cover">
                      <img src="/barangbaku_cover.png" alt="BarangBaku" />
                    </div>
                  )}
                  <div className="timeline-header">
                    <img src="/barangbaku.jpeg" alt="BarangBaku" className="company-logo" />
                    <div className="timeline-info">
                      <h3>Barangbaku</h3>
                      <p className="position">Software Engineer<br/>Internship</p>
                      <p className="duration">May 2021 - Oct 2021</p>
                    </div>
                    {!expandedCards[3] && <div className="expand-indicator">⌄</div>}
                  </div>
                  <div className={`timeline-details ${expandedCards[3] ? 'show' : ''}`}>
                    <p className="description">Developed a mobile marketplace application for Android and iOS called BarangBaku Marketplace, enabling users to buy and sell raw and semi-raw goods.</p>
                    <ul className="responsibilities">
                      <li>Contributed to building the startup's MVP e-commerce platform from the ground up for Android and iOS.</li>
                      <li>Implemented Clean Architecture principles to improve scalability, maintainability, and code organization.</li>
                      <li>Developed and released the Android application to the Google Play Store.</li>
                      <li>Built the iOS MVP using Kotlin Multiplatform Mobile (KMM) and SwiftUI to share business logic across platforms.</li>
                      <li>Developed backend business logic and API services using Golang to support marketplace operations and mobile integrations.</li>
                      <li>Collaborated closely with the startup team to rapidly iterate and deliver core marketplace features within MVP timelines.</li>
                    </ul>
                    <div className="project-tags">
                      <span className="tag">Kotlin</span>
                      <span className="tag">KMM</span>
                      <span className="tag">SwiftUI</span>
                      <span className="tag">Golang</span>
                      <span className="tag">Clean Architecture</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className={`timeline-card ${expandedCards[4] ? 'expanded' : ''}`} onClick={() => toggleCard(4)}>
                  {expandedCards[4] && (
                    <div className="timeline-cover">
                      <img src="/aces_cover.jpg" alt="ACES UMN" />
                    </div>
                  )}
                  <div className="timeline-header">
                    <img src="/aces.jpeg" alt="ACES UMN" className="company-logo" />
                    <div className="timeline-info">
                      <h3>Association of Computer Engineering Students</h3>
                      <p className="position">Academic Tutor<br/>Contract</p>
                      <p className="duration">Dec 2019 - Dec 2020</p>
                    </div>
                    {!expandedCards[4] && <div className="expand-indicator">⌄</div>}
                  </div>
                  <div className={`timeline-details ${expandedCards[4] ? 'show' : ''}`}>
                    <p className="description">Held weekly tutoring sessions for fellow students based on academic and technical learning requests.</p>
                    <ul className="responsibilities">
                      <li>Taught Electronics and Robotics fundamentals, including basic circuit design and embedded systems concepts.</li>
                      <li>Mentored students on Git and GitHub workflows, including version control, collaboration, and repository management.</li>
                      <li>Introduced Object-Oriented Programming (OOP) fundamentals and software development best practices.</li>
                      <li>Assisted students in understanding Calculus concepts and solving mathematical problems through guided practice sessions.</li>
                      <li>Taught Cisco and Huawei networking fundamentals, including basic network engineering, routing, switching, and infrastructure concepts.</li>
                      <li>Facilitated peer learning and technical discussions to help students strengthen problem-solving and programming skills.</li>
                    </ul>
                    <div className="project-tags">
                      <span className="tag">Teaching</span>
                      <span className="tag">Electronics</span>
                      <span className="tag">Robotics</span>
                      <span className="tag">Git</span>
                      <span className="tag">OOP</span>
                      <span className="tag">Networking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="section-header">
            <span className="section-label">Portfolio</span>
            <h2>Personal Projects</h2>
          </div>
          <div className="project-grid">
            <div className="project-card">
              <div className="project-image">
                <img src="/music-player.png" alt="Music Streaming App" />
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
              <a href="http://discord.com/users/313497257435463680" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="/discord-logo.svg" alt="Discord" className="social-logo" />
                <span>Discord</span>
              </a>
              <a href="https://github.com/michaelchen27" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="/github-logo.svg" alt="GitHub" className="social-logo" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">
                <img src="/linkedin-logo.svg" alt="LinkedIn" className="social-logo" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:michael.chen2701@gmail.com" className="social-link" onClick={handleEmailClick}>
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
