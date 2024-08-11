
import styles from './HeaderStyles.module.css';

function Header() {
  const sections = ['Home', 'About', 'Projects', 'Contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {sections.map((section) => (
            <li key={section} className={styles.navItem}>
              <button 
                onClick={() => scrollToSection(section)}
                className={styles.navLink}
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;