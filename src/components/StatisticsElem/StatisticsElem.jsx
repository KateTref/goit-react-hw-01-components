import PropTypes from 'prop-types';
import css from'./statisticsElem.module.css';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  } 

export const StatisticsElem = ({label, percentage}) => {
  return(
        <li className={css.item} style = {{backgroundColor: getRandomHexColor()}}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>
  ) 
}

StatisticsElem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

