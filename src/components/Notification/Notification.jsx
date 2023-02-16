import PropTypes from 'prop-types';
import { Message } from "components/Notification/Notification.styled";

const Notification = ({message}) => (
    <div>
        <Message>{message}</Message>
    </div>

);

Notification.propTypes = {
    message: PropTypes.string,
};

export default Notification;