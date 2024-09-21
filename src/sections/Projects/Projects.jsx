import { useState } from 'react';
import FullStack from '../../assets/FullStack.png';
import MeetApp from '../../assets/meetapp.png';
import ProjectCard from '../../components/ProjectCard';
import ProductDisplay from '../../assets/ProductDisplay.png';
import whatweather from '../../assets/whatweather.png';
import portfolionextjs from "../../assets/nextjs-portfolio.png";

function Projects() {
  const [selectedSkill, setSelectedSkill] = useState('All');

  const allProjects = [
    { src: ProductDisplay, link: "https://github.com/Sarrtt303/productDisplay", title: "Product Display", description: "Display products from API", skill: "Tools" },
    { src: whatweather, link: "https://github.com/Sarrtt303/whatweather?tab=readme-ov-file", title: "WhatWeather", description: "Weather Display App", skill: "Web Designs" },
    { src: FullStack, link: "https://github.com/Sarrtt303/Full-Stack-Assignment", title: "FullStack App", description: "App that saves your info in MongoDB", skill: "Other Projects" },
    { src: MeetApp, link: "https://github.com/Sarrtt303/meet-app", title: "Meet-App", description: "Uses Google Calendar API to create and join meetings", skill: "Tools" },
    { src: portfolionextjs, link: "https://portfolio-nextjs-pi-two.vercel.app", title: "porfolio-replication", description: "A recreation of a webpage design from a Figma file using nextjs", skill: "Web Designs" },
  ];

  const filteredProjects = selectedSkill === 'All'
    ? allProjects
    : allProjects.filter(project => project.skill === selectedSkill);

  return (
    <section id="projects" className="flex flex-col items-center text-center">
      <h2 className="sectionTitle text-4xl mt-10">Projects</h2>
      <div className="mb-8 flex justify-center space-x-4">
        {[ 'Web Designs', 'Tools', 'Other Projects'].map(skill => (
          <button
            key={skill}
            onClick={() => setSelectedSkill(skill)}
            className={`px-4 py-2 rounded-lg ${selectedSkill === skill ? 'bg-custom-orange text-white' : 'bg-gray-200 text-black'}`}
          >
            {skill}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-7 mt-5 md:grid-cols-2 lg:grid-cols-4">
        {filteredProjects.map((project, index) => (
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
