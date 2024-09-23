import PropTypes from 'prop-types';


function SkillList({ src, skill }) {
  return (
    <div className='skills'>
      <img src={src} alt={`${skill} icon`} />
      <p>{skill}</p>
    </div>
  );
}

SkillList.propTypes = {
  src: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
};

export default SkillList;
