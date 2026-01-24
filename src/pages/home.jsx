import Project from '../components/project'
import './home.css'

function Home() {
  
  const projects = [
    {
      title: 'My Book Shelf',
      description: 'An app that allows users to track books they have read and books they want to read using the Open Library API.',
      technologies: ['Node.js', 'Express', 'MySQL'],
      link: 'https://mybookshelf-caudill-1750fbfe2ab4.herokuapp.com/',
    },
    {
      title: 'IP Event Finder',
      description: 'This group project determined user location by IP and allowed the user to search for events in their area.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://dlerouge.github.io/com6338-10-10-lerouge-deovyun-Caudill-John-McDaniel-Chelsea/index.html',
    },
    {
      title: 'The Thicket',
      description: 'A WordPress portfolio containing creative writing and media projects.',
      technologies: ['WordPress', 'Technical Communication', 'Media Production'],
      link: 'https://writingfromthethicket.com/'
    }
  ]

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-photo">
          <img src="/profile-photo.jpg" alt="Profile" />
        </div>
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p className="hero-subtitle">
            Web Developer | Problem Solver | Lifelong Learner
          </p>
        </div>
      </section>

      <section className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home