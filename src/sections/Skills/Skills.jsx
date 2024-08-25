import { useState } from 'react';
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

  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('');

  const handlePrev = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setTimeout(() => {
      setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : allSkills.length - 1));
    }, 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setTimeout(() => {
      setStartIndex((prevIndex) => (prevIndex < allSkills.length - 1 ? prevIndex + 1 : 0));
    }, 500);
  };

  const visibleSkills = [
    allSkills[(startIndex - 1 + allSkills.length) % allSkills.length],
    allSkills[startIndex],
    allSkills[(startIndex + 1) % allSkills.length],
  ];

  return (
    <section id="skills" className="flex flex-col items-center text-center m1-1">
      <h1 className="sectionTitle">Skills</h1>
      <div className="flex items-center justify-center w-full max-w-[900px] mt-5 overflow-hidden relative">
        <button onClick={handlePrev} className="text-2xl text-current hover:text-[var(--btn-color)] p-2 z-10 mr-10">
          &lt;
        </button>
        <div
          className={`flex justify-center items-center gap-5 md:gap-7 w-full transition-transform duration-500 ease-in-out transform ${
            isAnimating ? (direction === 'left' ? 'translate-x-[33.33%]' : '-translate-x-[33.33%]') : ''
          }`}
          onTransitionEnd={() => setIsAnimating(false)}
          style={{ position: 'relative' }}
        >
          {visibleSkills.map((skill, index) => (
            <div
              key={index}
              className="w-[33.33%] flex justify-center items-center"
              style={{ transition: 'opacity 0.5s ease-in-out' }}
            >
              <SkillList src={skill.icon} skill={skill.name} />
            </div>
          ))}
        </div>
        <button onClick={handleNext} className="text-2xl text-current hover:text-[var(--btn-color)] p-2 ml-10 z-10">
          &gt;
        </button>
      </div>
    </section>
  );
}

export default Skills;
