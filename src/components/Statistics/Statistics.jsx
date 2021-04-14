import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistic = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className="title">{title}</h2>}      

      <ul className="stat-list">
        {stats.map((el) => <li className={styles.item} key={el.id}>
          <span className={styles.label}>{el.label}</span>
          <span className={styles.percentage}> {el.percentage}%</span>
        </li>)}        
      </ul>
    </section>);
}

Statistic.defaultProps = {
  title: ''
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }))
};

export default Statistic;