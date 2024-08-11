import { useState } from 'react';
import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../components/SkillList';
import { useTheme } from '../../components/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  
  const allSkills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "Node",
    "React", "Next", "D3", "Tailwind CSS",
    "Redux", "Webpack", "Git", "Jest", "Bootstrap",
    "Django", "Daisy UI", "Tensorflow", "Python"
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
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillCarousel}>
        <button onClick={handlePrev} className={styles.arrowButton}>&lt;</button>
        <div className={styles.skillList}>
          {visibleSkills.map((skill, index) => (
            <SkillList key={index} src={checkMarkIcon} skill={skill} />
          ))}
        </div>
        <button onClick={handleNext} className={styles.arrowButton}>&gt;</button>
      </div>
    </section>
  );
}

export default Skills;