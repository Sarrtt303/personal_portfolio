// src/components/ProjectFilters.jsx

import PropTypes from "prop-types";

function ProjectFilters({
  categories,
  selected,
  onChange,
}) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`
            rounded-full
            px-5
            py-2.5
            text-sm
            font-medium
            transition-all
            duration-300
            ${
              selected === category
                ? "bg-custom-orange text-white shadow-lg"
                : "border border-neutral-200 bg-white text-neutral-700 hover:border-custom-orange hover:text-custom-orange"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

ProjectFilters.propTypes = {
  categories: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ProjectFilters;