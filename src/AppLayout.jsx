import About from './components/About'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Projects from './components/Projects'

function AppLayout() {
  return (
    <div>
      <NavBar />

      <Hero />

      <div>
        <About />
      </div>

      <div>
        {/* <h2 className="text-5xl">Projects</h2> */}
        <Projects />
      </div>
    </div>
  )
}

export default AppLayout
