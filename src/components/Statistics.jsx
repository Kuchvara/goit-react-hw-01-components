import PropTypes from "prop-types";

const Statistic = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}      

      <ul className="stat-list">
        {stats.map((el) => <li className="item" key={el.id}>
          <span className="label">{el.label}</span>
          <span className="percentage"> {el.percentage}%</span>
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