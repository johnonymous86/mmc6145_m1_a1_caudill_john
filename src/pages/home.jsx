import Project from '../components/project'
import './home.css'

function Home() {

  const projects = [
    {
      title: 'My Bookshelf',
      description: 'An app that allows users to track books they have read and books they want to read using the Open Library API.',
      technologies: ['Node.js', 'MySQL', 'Express'],
      link: 'https://github.com/johnonymous86/mybookshelf-caudill/tree/main',
      image: 'https://via.placeholder.com/400x250?text=Project+1'
    },
    {
      title: 'IP Event Planner',
      description: 'Search for events happening near you using your IP address.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://dlerouge.github.io/com6338-10-10-lerouge-deovyun-Caudill-John-McDaniel-Chelsea/index.html',
      image: 'https://via.placeholder.com/400x250?text=Project+2'
    }
  ]

  return (
    <div className="home-page">
      <section className="hero">
        <h1>John Caudill</h1>
        <p className="hero-subtitle">
          Web Developer | Problem Solver | Lifelong Learner
        </p>
      </section>

      <section className="projects-section">
        <h2>Projects</h2>
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
