function Header() {
  const sections = ['Home', 'About', 'Projects', 'Contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[var(--background-color)] shadow-md z-[1000]">
      <nav className="flex justify-center py-4">
        <ul className="flex list-none p-0 m-0">
          {sections.map((section) => (
            <li key={section} className="mx-4">
              <button
                onClick={() => scrollToSection(section)}
                className="bg-none border-none  bg-[var(--background-color)] text-[var(--text-color)] cursor-pointer text-base font-rubik uppercase transition-colors  ease-in-out hover:text-[var(--btn-color)]"
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
