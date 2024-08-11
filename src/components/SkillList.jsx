import PropTypes from 'prop-types';
import styles from './SkillListStyles.module.css';

function SkillList({ src, skill }) {
    return (
      <div className={styles.skillItem}>
      <img src={src} alt="Checkmark" />
      <p>{skill}</p>
    </div>
    );
  }
  SkillList.propTypes = {
    src: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
  };
  export default SkillList;