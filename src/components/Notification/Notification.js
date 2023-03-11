import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return (
    <section>
      <h2>{message}</h2>
    </section>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};
