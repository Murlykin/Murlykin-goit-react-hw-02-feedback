import PropTypes from 'prop-types';
import {Statistic, СontainerStatistic } from 'components/Statistics/Statistics.styled'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <СontainerStatistic>
        <Statistic> Good: {good}</Statistic>
        <Statistic> Neutral: {neutral} </Statistic>
        <Statistic> Bad: {bad}</Statistic>
        <Statistic> Total: {total} </Statistic>
        <Statistic> Positive feedback: {positivePercentage} %</Statistic>
    </СontainerStatistic>
);


Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;