import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import TechStack from './components/TechStack'

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

      <TechStack />

      <Contact />
    </div>
  )
}

export default AppLayout
