// pages/Home/Hero.jsx

import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";

import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";

import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";

import CV from "../../assets/cv(Sept).pdf";

import { useTheme } from "../../components/ThemeContext";

import RotatingMoon from "../../components/RotatingMoon";

function Hero() {
  const { theme } = useTheme();

  const twitterIcon =
    theme === "light"
      ? twitterLight
      : twitterDark;

  const githubIcon =
    theme === "light"
      ? githubLight
      : githubDark;

  const linkedinIcon =
    theme === "light"
      ? linkedinLight
      : linkedinDark;

  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        overflow-hidden
        px-6
        md:px-12
        lg:px-20
        flex
        items-center
      "
    >
      {/* ===================================== */}
      {/* Background Glow */}
      {/* ===================================== */}

      <div
        className={`
          absolute
          top-1/2
          right-[-120px]
          -translate-y-1/2
          w-[420px]
          h-[420px]
          rounded-full
          blur-3xl
          opacity-20
          pointer-events-none
          transition-all
          duration-500

          ${theme === "dark"
            ? "bg-blue-500"
            : "bg-yellow-300"
          }
        `}
      />

      {/* ===================================== */}
      {/* Main Content */}
      {/* ===================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          items-center
          gap-10
        "
      >
        {/* ===================================== */}
        {/* LEFT SIDE */}
        {/* ===================================== */}

        <div
          className="
            flex
            flex-col
            items-center
            text-center
            lg:items-start
            lg:text-left
          "
        >
          {/* Small Badge */}

          <div
            className="
              mb-5
              px-4
              py-2
              rounded-full
              border
              border-[var(--border-color)]
              bg-[var(--card-bg)]
              backdrop-blur-md
              text-sm
              text-[var(--text-color)]
              shadow-sm
            "
          >
            Frontend Engineer • React • Three.js
          </div>

          {/* Heading */}

          <h1
            className="
              text-5xl
              sm:text-6xl
              lg:text-7xl
              font-black
              leading-none
              tracking-tight
              mb-6
            "
          >
            Building
            <br />

            <span
              className={`
                ${theme === "dark"
                  ? "text-blue-400"
                  : "text-amber-500"
                }
              `}
            >
              immersive
            </span>

            <br />

            web experiences.
          </h1>

          {/* Subtitle */}

          <p
            className="
              text-base
              sm:text-lg
              leading-relaxed
              text-[var(--text-color)]
              opacity-80
              max-w-[620px]
              mb-8
            "
          >
            I create scalable frontend
            systems using React,
            Tailwind CSS, Three.js and
            modern UI architecture —
            focused on smooth UX,
            performance and clean
            developer experience.
          </p>

          {/* Buttons */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-4
              mb-10
            "
          >
            <a href={CV} download>
              <button
                className="
                  px-7
                  h-12
                  rounded-full
                  font-semibold
                  transition-all
                  duration-300
                  hover:scale-105

                  bg-[var(--btn-color)]
                  text-[var(--btn-text-color)]

                  shadow-lg
                "
              >
                Download Resume
              </button>
            </a>

            <a href="#projects">
              <button
                className="
                  px-7
                  h-12
                  rounded-full
                  font-semibold
                  border

                  border-[var(--border-color)]

                  hover:bg-[var(--card-bg)]

                  transition-all
                  duration-300
                "
              >
                View Projects
              </button>
            </a>
          </div>

          {/* Socials */}

          <div
            className="
              flex
              items-center
              gap-6
            "
          >
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="
                hover:scale-110
                transition-transform
              "
            >
              <img
                src={twitterIcon}
                alt="Twitter"
                className="w-7"
              />
            </a>

            <a
              href="https://github.com/Sarrtt303"
              target="_blank"
              rel="noreferrer"
              className="
                hover:scale-110
                transition-transform
              "
            >
              <img
                src={githubIcon}
                alt="GitHub"
                className="w-7"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/sagar-debnath-50410021a/"
              target="_blank"
              rel="noreferrer"
              className="
                hover:scale-110
                transition-transform
              "
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-7"
              />
            </a>
          </div>
        </div>

        {/* ===================================== */}
        {/* RIGHT SIDE */}
        {/* ===================================== */}

        <div
          className="
            relative
            flex
            items-center
            justify-center
            h-[400px]
            md:h-[500px]
            lg:h-[700px]
          "
        >
          {/* Moon */}

          <RotatingMoon
            rotationSpeed={0.0009}
            size={
              window.innerWidth < 768
                ? 240
                : 420
            }
            className="
              relative
              z-10
              opacity-95
            "
          />

          {/* Secondary Glow */}

          <div
            className={`
              absolute
              w-[300px]
              h-[300px]
              md:w-[500px]
              md:h-[500px]
              rounded-full
              blur-3xl
              opacity-20

              ${theme === "dark"
                ? "bg-indigo-500"
                : "bg-orange-300"
              }
            `}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;