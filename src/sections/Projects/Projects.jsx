
import styles from './ProjectStyles.module.css';
import FullStack from '../../assets/FullStack.png'
import container from '../../assets/container.png'
import ProjectCard from '../../components/ProjectCard';
import ProductDisplay from '../../assets/ProductDisplay.png';
import whatweather from '../../assets/whatweather.png'

function Projects() {
  const projects = [
    { src: ProductDisplay, link: "https://github.com/Sarrtt303/productDisplay", title: "Product Display", description: "Display products from API" },
    { src: whatweather, link: "https://github.com/Sarrtt303/whatweather?tab=readme-ov-file", title: "WhatWeather", description: "Weather Dispaly App" },
    { src: FullStack, link: "https://github.com/Sarrtt303/Full-Stack-Assignment", title: "FullStack App", description: "App that saves your info in mongoDb" },
    { src: container, link: "https://github.com/Sarrtt303/dt-container-page/tree/main", title: "Container", description: "Assignment for deepthought" },
  ];

  return (
    <section id="projects" className={styles.container}>
      <h2 className="sectionTitle">Projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src}
            link={project.link}
            h3={project.title}
            p={project.description}
          />
        ))}
      </div>
    </section>
  );
}



export default Projects;