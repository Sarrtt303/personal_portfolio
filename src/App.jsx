import './App.css'
import { useTheme } from './components/ThemeContext';
import Contact from './sections/Contact/Contact.jsx'
import Hero from './sections/Hero/Hero.jsx'
import Projects from './sections/Projects/Projects.jsx'
import Skills from './sections/Skills/Skills.jsx'
import Footer from './sections/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx';
import StarryBackground from './components/StarryBackground.jsx';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`relative fluid-container`} data-theme={theme}>
      <header className="relative z-30 bg-white dark:bg-gray-800">
        <Header />
      </header>

      <div className="fixed inset-0 z-10">
        <StarryBackground theme={theme} />
      </div>

      <main className="relative z-20">
        <section id="home" className="relative">
          <Hero />
          <Skills />
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <section id="footer" className="relative z-30">
        <Footer />
      </section>
    </div>
  );
}

export default App;