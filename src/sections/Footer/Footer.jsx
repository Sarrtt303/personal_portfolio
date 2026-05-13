// sections/Footer/Footer.jsx
import { useTheme } from "../../components/ThemeContext";

import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";

import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";


function Footer() {
  const { theme } = useTheme();

  const githubIcon =
    theme === "light"
      ? githubLight
      : githubDark;

  const linkedinIcon =
    theme === "light"
      ? linkedinLight
      : linkedinDark;

  return (
    <footer
      className="
        relative
        border-t
        border-[var(--border-color)]
        mt-24
      "
    >
      {/* Glow Line */}

      <div
        className="
          absolute
          top-0
          left-1/2
          -translate-x-1/2
          w-[300px]
          h-[1px]
          bg-gradient-to-r
          from-transparent
          via-[var(--btn-color)]
          to-transparent
          opacity-60
        "
      />

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-10
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-6
        "
      >
        {/* Left */}

        <div
          className="
            text-center
            md:text-left
          "
        >
          <h3
            className="
              text-lg
              font-semibold
              mb-1
            "
          >
            Sagar Debnath
          </h3>

          <p
            className="
              text-sm
              opacity-70
              max-w-md
            "
          >
            Built with React,
            Tailwind CSS &
            Three.js.
          </p>
        </div>

        {/* Center */}

        <div
          className="
            text-sm
            opacity-60
            text-center
          "
        >
          © 2026 All rights reserved.
        </div>

        {/* Right */}

        <div
          className="
            flex
            items-center
            gap-5
          "
        >
          <a
            href="https://github.com/Sarrtt303"
            target="_blank"
            rel="noreferrer"
            className="
              hover:scale-110
              transition-transform
              duration-300
            "
          >
            <img
              src={githubIcon}
              alt="GitHub"
              className="w-5"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/sagar-debnath-50410021a/"
            target="_blank"
            rel="noreferrer"
            className="
              hover:scale-110
              transition-transform
              duration-300
            "
          >
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-5"
            />
          </a>


        </div>
      </div>
    </footer>
  );
}

export default Footer;