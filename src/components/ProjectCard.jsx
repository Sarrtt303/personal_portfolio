import PropTypes from 'prop-types';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 max-w-xs mx-auto"
    >
      <img className="w-full rounded-t-xl" src={src} alt={`${h3} project`} />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{h3}</h3>
        <p className="mt-2 text-sm text-gray-600">{p}</p>
      </div>
    </a>
  );
}

ProjectCard.propTypes = {
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
};

export default ProjectCard;
