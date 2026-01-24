import './contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-section">
        <h1>Get In Touch</h1>
        
        <p className="contact-intro">
          I'm always interested in hearing about new opportunities and projects. 
          Feel free to reach out!
        </p>

        <div className="contact-links">
          <div className="contact-card">
            <h2>LinkedIn</h2>
            <p>Connect with me professionally</p>
            <a 
              href="https://www.linkedin.com/in/john-caudill-6014" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-button"
            >
              Visit LinkedIn Profile
            </a>
          </div>

          <div className="contact-card">
            <h2>GitHub</h2>
            <p>Check out my code and projects</p>
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-button"
            >
              Visit GitHub Profile
            </a>
          </div>

          <div className="contact-card">
            <h2>Email</h2>
            <p>Send me a message</p>
            <a 
              href="mailto:jcaudill86@gmail.com"
              className="contact-button"
            >
              Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
