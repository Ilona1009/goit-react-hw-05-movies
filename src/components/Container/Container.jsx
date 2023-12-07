import PropTypes from 'prop-types';
import { ContainerStyled } from './ContainerStyled';

export default Container = ({ children }) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

Container.propTypes = {
  children: PropTypes.node,
};
