import { useState } from 'react'
import Nav from './Nav'
import About from './About'
import ProjectCard from './ProjectCard'
import Contact from './Contact'
import Footer from './Footer'
import './App.css'

const projects = [
  { title: 'Unibite', description: 'Website για διαμοιρασμό φαγητού', link: '#' },
  { title: 'Patras Limani', description: 'Application για καλύτερη εξυπηρέτηση λιμανιού', link: '#' },
]

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />

      <header>
        <h1>Artemios Kousiappas</h1>
        <p>Web Developer</p>
      </header>

      <main>
        <About />

        <section id="projects">
          <h2>Projects</h2>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </section>

        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App