import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Synx from './components/Synx'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Publications from './components/Publications'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Synx />
        <Skills />
        <Projects />
        <Publications />
        <Certifications />
        <Achievements />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
