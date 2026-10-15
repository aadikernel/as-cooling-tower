import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Team from './components/Team'
import Services from './components/Services'
import Industries from './components/Industries'
import ProjectsGallery from './components/ProjectsGallery'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Services />
        <Industries />
        <ProjectsGallery />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
