import { StatisticsElem } from "components/StatisticsElem/StatisticsElem";
import css from  './statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({title, stats}) => {
    return (
        <section className={css.statistics}>
          <h2 className={css.title}>{title}</h2>

          <ul className={css.statList}>
             {stats.map(({id, label, percentage}) => (
             <StatisticsElem
              key = {id}
              label = {label}
              percentage = {percentage}
              />
             ))}
          </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
}

export default Statistics;