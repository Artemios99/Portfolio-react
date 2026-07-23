function Nav({ darkMode, setDarkMode }) {
  return (
    <nav className="nav">
      <a href="#about">Σχετικά</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Επικοινωνία</a>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️' : '🌙'}
      </button>
    </nav>
  )
}

export default Nav