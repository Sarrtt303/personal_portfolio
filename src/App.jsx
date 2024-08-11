

import './App.css'
import Contact from './sections/Contact/Contact'
import Hero from './sections/Hero/Hero'
import Projects from './sections/Projects/Projects'
import Skills from './sections/Skills/Skills'
import Footer from './sections/Footer/Footer'
import Header from './components/Header/Header';

function App() {
  

  return (
    <div className="App">
    <Header />
    <main>
      <section id="home"><Hero /></section>
      <section id="about"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <section id="footer"><Footer /></section>
    </main>
  </div>
  )
}

export default App
