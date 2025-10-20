import PropTypes from "prop-types";

function ProjectCard({ src, link, h3, p, onExpand }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 max-w-xs mx-auto">
      <img
        className="w-full rounded-t-xl cursor-pointer"
        src={src}
        alt={`${h3} project`}
        onClick={onExpand} // expands project
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold cursor-pointer" onClick={onExpand}>
          {h3}
        </h3>
        <p className="mt-2 text-sm text-gray-600">{p}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-custom-orange hover:underline"
          onClick={(e) => e.stopPropagation()} // stop parent click
        >
          View Project →
        </a>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  onExpand: PropTypes.func, // new prop
};

export default ProjectCard;
