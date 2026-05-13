// src/pages/Projects/Projects.jsx

import { useState } from "react";

import {
  projects,
  projectCategories,
} from "../../components/data/project";

import ProjectCard from "../../components/ProjectCard";
import ProjectModal from "../../components/ProjectModal";
import ProjectFilters from "../../components/ProjectFilters";

function Projects() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [activeProject, setActiveProject] =
    useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter(
          (project) =>
            project.category === selectedCategory
        );

  return (
    <section
      id="projects"
      className="
        px-4
        py-20
        md:px-8
      "
    >
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm  text-[var(--text-color)] font-semibold uppercase tracking-[0.25em] text-custom-orange">
          Portfolio
        </span>

        <h2 className="mt-4 text-5xl font-bold text-[var(--text-color)]">
          Featured Projects
        </h2>

        <p className="mt-5 text-lg leading-relaxed text-neutral-400">
          A collection of web platforms,
          AI projects, dashboards, and
          full-stack systems built for
          real-world applications.
        </p>
      </div>

      {/* Filters */}
      <div className="mt-12">
        <ProjectFilters
          categories={projectCategories}
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>

      {/* Grid */}
      <div
        className="
          mx-auto
          mt-14
          grid
          max-w-7xl
          grid-cols-1
          gap-8
          md:grid-cols-2
          xl:grid-cols-3
        "
      >
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() =>
              setActiveProject(project)
            }
          />
        ))}
      </div>

      {/* Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}

export default Projects;