import PropTypes from 'prop-types';
import {ButtonContainer, FeedbackButton} from "components/FeedbackOptions/FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return(
        <ButtonContainer>
            {options.map((option) =>(
            <FeedbackButton
                type="button"
                key={option}
                onClick={() => onLeaveFeedback(option)}
            >{option}</FeedbackButton>
        )) }
        </ButtonContainer>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,

};

export default FeedbackOptions;
