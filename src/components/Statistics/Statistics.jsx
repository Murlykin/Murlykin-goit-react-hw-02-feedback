import PropTypes from 'prop-types';
import { Statistic, СontainerStatistic } from 'components/Statistics/Statistics.styled';
import {HiUserPlus, HiUser, HiUserMinus, HiUserGroup, HiShieldCheck } from "react-icons/hi2";

const Statistics = ({good, neutral, bad, total, positivePercentage}) => (
    <СontainerStatistic>
        <Statistic> <HiUserPlus /> Good: {good}</Statistic>
        <Statistic> <HiUser /> Neutral: {neutral} </Statistic>
        <Statistic> <HiUserMinus /> Bad: {bad}</Statistic>
        <Statistic> <HiUserGroup /> Total: {total} </Statistic>
        <Statistic> <HiShieldCheck /> Positive feedback: {positivePercentage} %</Statistic>
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