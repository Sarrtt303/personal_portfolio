import FullStack from '../../assets/FullStack.png';
import container from '../../assets/container.png';
import ProjectCard from '../../components/ProjectCard';
import ProductDisplay from '../../assets/ProductDisplay.png';
import whatweather from '../../assets/whatweather.png';

function Projects() {
  const projects = [
    { src: ProductDisplay, link: "https://github.com/Sarrtt303/productDisplay", title: "Product Display", description: "Display products from API" },
    { src: whatweather, link: "https://github.com/Sarrtt303/whatweather?tab=readme-ov-file", title: "WhatWeather", description: "Weather Display App" },
    { src: FullStack, link: "https://github.com/Sarrtt303/Full-Stack-Assignment", title: "FullStack App", description: "App that saves your info in MongoDB" },
    { src: container, link: "https://github.com/Sarrtt303/dt-container-page/tree/main", title: "Container", description: "Assignment for DeepThought" },
  ];

  return (
    <section id="projects" className="flex flex-col items-center text-center">
      <h2 className="sectionTitle">Projects</h2>
      <div className="flex flex-col items-center gap-7 mt-5 md:flex-row md:flex-wrap md:justify-evenly md:px-8">
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
