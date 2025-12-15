import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import TechStack from './components/TechStack'

function AppLayout() {
  return (
    <div>
      <div className="sticky top-2 right-0 left-0 z-40 flex justify-center px-4">
        <NavBar />
      </div>

      <Hero />

      <div>
        <About />
      </div>

      <div>
        <Projects />
      </div>

      <TechStack />

      <Contact />

      <Footer />
    </div>
  )
}

export default AppLayout
