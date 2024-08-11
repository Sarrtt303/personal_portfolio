
import PropTypes from 'prop-types';

function ProjectCard({ src, link, h3, p }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <img className="hover" src={src} alt={`${h3} project`} />
      <h3>{h3}</h3>
      <p>{p}</p>
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