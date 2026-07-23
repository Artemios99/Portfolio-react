import { useState } from 'react'
import ProjectCard from './ProjectCard'
import './App.css'

const projects = [
  { title: 'Unibite', description: 'Website για διαμοιρασμό φαγητού', link: '#' },
  { title: 'Patras Limani', description: 'Application για καλύτερη εξυπηρέτηση λιμανιού', link: '#' },
]

function App() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <h1>Το Portfolio μου</h1>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
      <h2>Projects</h2>
      {projects.map((project) => (
      <ProjectCard
        key={project.title}
        title={project.title}
        description={project.description}
        link={project.link}
      />
      ))}
    </div>
  )
}

export default App