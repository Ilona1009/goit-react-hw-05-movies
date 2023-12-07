import PropTypes from 'prop-types';
import { MessageStyled } from './MessageStyled';

const Message = ({ children }) => {
  return <MessageStyled>{children}</MessageStyled>;
};

Message.propTypes = {
  children: PropTypes.node,
};
