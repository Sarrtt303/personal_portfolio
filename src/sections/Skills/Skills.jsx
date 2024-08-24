import { useState } from 'react';

import SkillList from '../../components/SkillList';

import htmlIcon from '../../assets/html-5.png';
import cssIcon from '../../assets/css-3.png';
import jsIcon from "../../assets/js.png";
import nodeIcon from '../../assets/node-js.png';
import tsIcon from '../../assets/typescript.png';
import reactIcon from '../../assets/react.svg';
import nextIcon from '../../assets/next-js_1.png';
import d3Icon from '../../assets/D3_js_logo.png';
import tailwindIcon from '../../assets/tailwind.jpeg';
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

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : allSkills.length - 3));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex < allSkills.length - 3 ? prevIndex + 1 : 0));
  };

  const visibleSkills = allSkills.slice(startIndex, startIndex + 3);

  return (
    <section id="skills" className="flex flex-col items-center text-center">
      <h1 className="sectionTitle">Skills</h1>
      <div className="flex items-center justify-center w-full max-w-[900px] mt-5">
        <button onClick={handlePrev} className="text-2xl text-current hover:text-[var(--btn-color)] p-2">
          &lt;
        </button>
        <div className="flex justify-center items-center gap-5 md:gap-7 w-full overflow-hidden whitespace-nowrap">
          {visibleSkills.map((skill, index) => (
            <SkillList key={index} src={skill.icon} skill={skill.name} />
          ))}
        </div>
        <button onClick={handleNext} className="text-2xl text-current hover:text-[var(--btn-color)] p-2">
          &gt;
        </button>
      </div>
    </section>
  );
}

export default Skills;
