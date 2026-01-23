import './About.css'

function About() {
  return (
    <div className="about-page">
      <section className="about-section">
        <h1>About Me</h1>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              [Add your introduction here - who you are and what you do]
            </p>
            
            <p>
              [Add information about your background, education, or experience]
            </p>
            
            <p>
              [Add information about your skills, interests, or what drives you]
            </p>
          </div>

          <div className="skills-section">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <ul>
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>[Add more skills]</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3>Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>[Add more skills]</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h3>Tools</h3>
                <ul>
                  <li>Git/GitHub</li>
                  <li>VS Code</li>
                  <li>[Add more tools]</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
