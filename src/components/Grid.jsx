import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledGrid = styled.div`
  display: grid;
  width: 1200px;
  margin: 0 auto;
  grid-template-columns: 540px 300px 300px;
  grid-template-rows: 264px 244px;
  grid-gap: 30px;
`;

export default function Grid({ children }) {
  return <StyledGrid>{children}</StyledGrid>;
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};
