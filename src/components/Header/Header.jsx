import { useTheme } from "../ThemeContext";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";



function Header() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  // const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  // const githubIcon = theme === "light" ? githubLight : githubDark;
  // const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const sections = ["Home", "Skills", "Projects", "Contact"];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
                className="bg-none border-none bg-[var(--background-color)] text-[var(--text-color)] cursor-pointer text-xs sm:text-sm md:text-base font-rubik uppercase  hover:text-[var(--btn-color)] px-2 sm:px-3 md:px-4 py-2"
              >
                {section}
              </button>
            </li>
          ))}
        </ul>
        <div className="flex-1 flex justify-end">
          <button className="bg-[var(--background-color)] border-none h-10 cursor-pointer flex items-center justify-center gap-2" onClick={toggleTheme}>
            <h1 className="text-[var(--text-color)] text-xs sm:text-sm md:text-base font-rubik"></h1>
            <img
              className="
              relative
              z-20
              w-6
              h-6
              cursor-pointer
              md:bottom-auto
              md:top-0
              md:right-0
              md:w-7
              md:h-7
            "
              src={themeIcon}
              alt="Color mode icon"

            />
          </button>
        </div>

      </nav>
    </header>
  );
}

export default Header;
