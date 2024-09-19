import './App.css'
import Contact from './sections/Contact/Contact'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Footer from './sections/Footer/Footer'
import Header from './components/Header/Header';
import StarryBackground from './components/StarryBackground';

function App() {
  return (
    <div className="relative fluid-container">
      {/* Ensure that Header has a background and stays above the starry background */}
      <header className="relative z-10 bg-white">
        <Header />
      </header>

      {/* Starry background should be positioned behind everything and cover the full viewport */}
      <div className="fixed inset-0 z-0">
        <StarryBackground />
      </div>

      {/* Main content */}
      <main className="relative z-10">
        {/* Sections that will be on top of the background */}
        <section id="home" className="relative">
          <Hero />
          <Skills />
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <section id="footer" className="relative z-10">
        <Footer />
      </section>
    </div>
  );
}

export default App;
