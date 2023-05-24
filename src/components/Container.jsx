import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url(${'/assets/background.jpg'}) no-repeat center center / cover;

  display: flex;
  align-items: center;

  & > * {
    position: relative;
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    backdrop-filter: blur(20px);
  }
`;

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
