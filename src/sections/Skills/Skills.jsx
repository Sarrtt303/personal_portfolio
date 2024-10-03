import { useEffect, useRef } from 'react';
import SkillList from '../../components/SkillList';
import htmlIcon from '../../assets/html-5.png';
import cssIcon from '../../assets/css-3.png';
import jsIcon from "../../assets/js.png";
import nodeIcon from '../../assets/node-js.png';
import tsIcon from '../../assets/typescript.png';
import reactIcon from '../../assets/atom.png';
import nextIcon from '../../assets/next-js_1.png';
import d3Icon from '../../assets/D3_js_logo.png';
import tailwindIcon from '../../assets/tailwindcss.png';
import gitIcon from '../../assets/git.png';
import pythonIcon from '../../assets/python.png';
import bootstrapIcon from '../../assets/bootstrap.png';
import mongoIcon from '../../assets/mongo.jpeg';

function Skills() {
  const allSkills = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "TypeScript", icon: tsIcon },
    { name: "Node", icon: nodeIcon },
    { name: "React", icon: reactIcon },
    { name: "Next", icon: nextIcon },
    { name: "D3", icon: d3Icon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "Git", icon: gitIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "MongoDb", icon: mongoIcon },
    { name: "Python", icon: pythonIcon }
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollWidth = scrollContainer.scrollWidth;
      const animationDuration = scrollWidth / 50; // Adjust speed here

      scrollContainer.style.setProperty('--scroll-width', `${scrollWidth}px`);
      scrollContainer.style.setProperty('--animation-duration', `${animationDuration}s`);
    }
  }, []);

  return (
    <section id="skills" className="flex flex-col items-center text-center py-4 w-full overflow-hidden">
      <h1 className="sectionTitle mb-4">Skills</h1>
      <div className="w-full relative">
        <div 
          ref={scrollRef}
          className="flex animate-loop-scroll"
          style={{
            '--scroll-width': '10px',
          }}
        >
          {[...allSkills, ...allSkills, ...allSkills].map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex-none w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 lg:w-28 lg:h-32 xl:w-32 xl:h-36 flex flex-col justify-center items-center mx-2 sm:mx-3 md:mx-4"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 flex justify-center items-center">
                <SkillList src={skill.icon}  />
              </div>
              <span className="mt-1 text-xs sm:text-sm md:text-base">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;