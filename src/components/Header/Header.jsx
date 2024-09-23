function Header() {
  const sections = ['Home', 'Skills', 'Projects', 'Contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-[var(--background-color)] shadow-md z-[1000]">
      <nav className="flex justify-center py-2 px-1 sm:px-2 w-full">
        <ul className="flex justify-center text-lg items-center list-none p-0 m-0 w-full max-w-screen-lg overflow-x-auto">
          {sections.map((section) => (
            <li key={section} className="flex-shrink-0">
              <button
                onClick={() => scrollToSection(section)}
                className="bg-none border-none bg-[var(--background-color)] text-[var(--text-color)] cursor-pointer text-xs sm:text-sm md:text-base font-rubik uppercase transition-colors ease-in-out hover:text-[var(--btn-color)] px-2 sm:px-3 md:px-4 py-2"
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