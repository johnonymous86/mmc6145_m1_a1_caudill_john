import './About.css'

function About() {
  return (
    <div className="about-page">
      <section className="about-section">
        <h1>About Me</h1>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              My name is John Caudill. I am a student at the University of Florida where I am completing an MA in Web Design and Online Communication.
            </p>
            
            <p>
              Currently, I serve as the webmaster at a small community college in Southwest Virginia. In my spare time, I like to hike, read, write, and play music.
            </p>
            
            <p>
              You can view some of my creative projects at my other site, <a href="https://writingfromthethicket.com/">The Thicket.</a>
            </p>
          </div>

          <div className="about-photo">
            <img src="/profile-photo.jpg" alt="Profile" />
          </div>

          <div className="skills-section">
            <h2>Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <ul>
                  <li>HTML/CSS </li>
                  <li>JavaScript </li>
                  <li>React </li>
                  <li>UX/UI Design</li>
                  <li>Drupal/WordPress</li>
                </ul>
              </div>
              <hr></hr>
              <br></br>
              <div className="skill-category">
                <h3>Backend</h3>
                <ul>
                  <li>Node.js </li>
                  <li>Express </li>
                  <li>Linux/Apache</li>
                </ul>
              </div>
              <hr></hr>
              <br></br>
              <div className="skill-category">
                <h3>Tools</h3>
                <ul>
                  <li>Git/GitHub </li>
                  <li>VS Code </li>
                  <li>DevTools</li>
                  <li>Pantheon/New Relic</li>
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
