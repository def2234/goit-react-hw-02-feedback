import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Ul, Li, Btn } from './FeedbackOptions-styled';

export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Ul>
      {options.map(option => {
        return (
          <Li key={shortid.generate()}>
            <Btn type="button" name={option} onClick={onLeaveFeedback}>
              {option}
            </Btn>
          </Li>
        );
      })}
    </Ul>
  );
};

FeedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
