import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${'/assets/background.jpg'}) no-repeat center center / 120%;

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
    z-index: 1;
    width: 100%;
    height: 100vh;
    backdrop-filter: blur(20px);
  }
`

export default function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}
