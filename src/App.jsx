import "./App.css";

import { useTheme } from "./components/ThemeContext";

import Contact from "./sections/Contact/Contact.jsx";
import Hero from "./sections/Hero/Hero.jsx";
import Projects from "./sections/Projects/Projects.jsx";
import Skills from "./sections/Skills/Skills.jsx";
import Footer from "./sections/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

import StarryBackground from "./components/StarryBackground.jsx";

function App() {
  const { theme } = useTheme();

  return (
    <>
      {/* ================================= */}
      {/* Background Layer */}
      {/* ================================= */}

      <div className="fixed inset-0 z-0">
        <StarryBackground theme={theme} />
      </div>

      {/* ================================= */}
      {/* Main App */}
      {/* ================================= */}

      <div
        className="
          relative
          w-full
          overflow-x-hidden
        "
        data-theme={theme}
      >
        {/* ================================= */}
        {/* Header */}
        {/* ================================= */}

        <header
          className="
            fixed
            top-0
            left-0
            w-full
            z-50
          "
        >
          <Header />
        </header>

        {/* ================================= */}
        {/* Main */}
        {/* ================================= */}

        <main className="relative z-10">
          {/* Hero */}
          <section
            id="home"
            className="
              relative
              min-h-screen
            "
          >
            <Hero />
          </section>

          {/* Skills */}
          <section
            className="
              relative
              z-10
            "
          >
            <Skills />
          </section>

          {/* Projects */}
          <section
            className="
              relative
              z-10
            "
          >
            <Projects />
          </section>

          {/* Contact */}
          <section
            id="contact"
            className="
              relative
              z-10
            "
          >
            <Contact />
          </section>
        </main>

        {/* Footer */}
        <footer
          className="
            relative
            z-20
          "
        >
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;