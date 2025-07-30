
import NavBar from "./components/NavBar"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience"
import FeatureCards from "./sections/FeatureCards"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import LogoShowcase from "./sections/LogoShowcase"
import AppShowcase from "./sections/ShowcaseSection"
import TechStack from "./sections/TechStack"


function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AppShowcase />
      <LogoShowcase />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
      </>
  )
}

export default App