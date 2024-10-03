import heroImg from '../../assets/profilepic.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../components/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section
      id="hero"
      className="flex flex-col justify-center gap-5 text-center h-[100dvh] min-h-[500px] md:flex-row-reverse md:justify-evenly lg:flex-row lg:justify-evenly xl:justify-evenly xl:gap-10"
    >
      <div className="relative flex flex-col items-center mb-4 md:mb-0">
        <img
          src={heroImg}
          className="w-[150px] h-[150px] rounded-full border-2 border-gray-300 object-cover md:w-[25vh] md:h-[25vh] lg:w-[30vh] lg:h-[30vh] xl:w-[40vh] xl:h-[40vh] transition-width duration-300 ease-in-out"
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className="absolute -bottom-8 right-1/4 w-[25px] cursor-pointer md:bottom-auto md:top-0 md:right-0 sm:w-10 sm:h-10 md:w-12 md:h-12"
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="text-xl">Hi, I am,</h1>
        <h1 className="text-4xl font-bold">Sagar<br />Debnath</h1>
        <h2 className="text-2xl">Web Developer</h2>
        <span className="flex gap-6 justify-center">
          <a href="https://twitter.com/" target="_blank" className="m-0">
            <img src={twitterIcon} alt="Twitter icon" className="w-[30px]" />
          </a>
          <a href="https://github.com/Sarrtt303" target="_blank" className="m-0">
            <img src={githubIcon} alt="Github icon" className="w-[30px]" />
          </a>
          <a href="https://www.linkedin.com/in/sagar-debnath-50410021a/" target="_blank" className="m-0">
            <img src={linkedinIcon} alt="Linkedin icon" className="w-[30px]" />
          </a>
        </span>
        <p className="max-w-[24ch] text-center">
          Passion for developing modern web apps using React, Tailwind, Next.js, and learning new technologies to facilitate building commercial businesses.
        </p>
        <a href={CV} download className="self-center">
          <button className="bg-[var(--btn-color)] text-[var(--btn-text-color)] rounded-full w-[126px] h-[50px] text-lg font-bold shadow-md transition-transform duration-200 ease-in-out transform hover:scale-105 active:translate-y-0.5 active:shadow-sm">
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
