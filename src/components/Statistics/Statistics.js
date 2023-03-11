import PropTypes from 'prop-types';
import { Ul, Li, P } from './Statistics-styled';

export const Statistics = ({ good, neutral, bad, total, persentage }) => {
  return (
    <Ul>
      <Li>
        <P>Good:</P>
        {good}
      </Li>
      <Li>
        <P>Neutral:</P>
        {neutral}
      </Li>
      <Li>
        <P>Bad:</P>
        {bad}
      </Li>
      <Li>
        <P>Total:</P>
        {total}
      </Li>

      <Li>
        <P>Positive feedback:</P>
        <span>{persentage}%</span>
      </Li>
    </Ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  persentage: PropTypes.number.isRequired,
};
