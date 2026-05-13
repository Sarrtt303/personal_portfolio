// src/components/ProjectModal.jsx

import PropTypes from "prop-types";
import ModalPortal from "./ModalPortal";
import { X, CircleDot} from "lucide-react";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <ModalPortal>
      <div
        className="
          fixed
          inset-0
          z-[9999]
        overflow-y-auto
        bg-black/80
        backdrop-blur-md
      "
      onClick={onClose}
    >
         <div
      className="
        min-h-screen
        flex
        items-center
        justify-center
        p-4
      "
    >
      <div
        className="
          relative
          max-h-[90vh]
          w-full
          max-w-6xl
          overflow-y-auto
          rounded-3xl
          bg-white
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close */}
        <button
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            z-10
            rounded-full
            bg-black/10
            p-2
            transition
            hover:bg-black/20
          "
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid lg:grid-cols-2">
          {/* Image */}
          <div className="relative
    flex
    items-center
    justify-center
    bg-neutral-100
    p-6
    h-[350px]
    lg:h-[700px]">
            <img
              src={project.image}
              alt={project.title}
              className="max-h-full
      max-w-full
      object-contain"
            />
          </div>

          {/* Content */}
          <div className="p-8 lg:p-10">
            <div className="mb-3 flex items-center gap-3">
              <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-700">
                {project.category}
              </span>

              <span className="rounded-full bg-neutral-100 px-4 py-1 text-sm font-medium text-neutral-700">
                {project.status}
              </span>
            </div>

            <h2 className="text-4xl font-bold text-neutral-900">
              {project.title}
            </h2>

            <p className="mt-6 leading-relaxed text-neutral-600">
              {project.description}
            </p>

            {/* Duration */}
            <div className="mt-6">
              <span className="font-semibold text-neutral-800">
                Duration:
              </span>{" "}
              <span className="text-neutral-600">
                {project.duration}
              </span>
            </div>

            {/* Tech */}
            <div className="mt-8">
              <h3 className="mb-3 text-lg font-semibold">
                Technologies
              </h3>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="
                      rounded-full
                      border
                      text-neutral-700
                      border-neutral-200
                      px-4
                      py-2
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mt-8">
              <h3 className="mb-3 text-lg font-semibold">
                Features
              </h3>

              <ul className="space-y-3">
                {project.features.map((feature) => (
                  
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-neutral-600"
                  >
                    <CircleDot size={16} className="text-custom-orange mt-1" />
                    <span className="mt-2 h-2 w-2 rounded-full bg-custom-orange" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-custom-orange
                    px-6
                    py-3
                    font-medium
                    text-white
                    transition
                    hover:opacity-90
                  "
                >
                  Live Site
                  
                </a>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-xl
                    border
                    border-neutral-300
                    px-6
                    py-3
                    font-medium
                    transition
                    hover:bg-neutral-100
                  "
                >
                  GitHub
                  
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </ModalPortal>
  );
}

ProjectModal.propTypes = {
  project: PropTypes.object,
  onClose: PropTypes.func,
};

export default ProjectModal;