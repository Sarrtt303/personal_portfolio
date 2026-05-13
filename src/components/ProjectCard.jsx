// src/components/ProjectCard.jsx

import PropTypes from "prop-types";
import { ArrowUpRight } from "lucide-react";

function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-neutral-200
        bg-white
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        cursor-pointer
      "
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Status */}
        <div className="absolute top-4 right-4">
          <span
            className="
              rounded-full
              bg-white/90
              text-neutral-800
              px-3
              py-1
              text-xs
              font-semibold
              backdrop-blur
            "
          >
            {project.status}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wider text-custom-orange">
            {project.category}
          </span>

          <ArrowUpRight
            size={18}
            className="
              text-neutral-400
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </div>

        <h3 className="text-xl font-bold text-neutral-900">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          {project.short}
        </p>

        {/* Tech */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies
            .slice(0, 3)
            .map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  bg-neutral-100
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-neutral-700
                "
              >
                {tech}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
  onClick: PropTypes.func,
};

export default ProjectCard;