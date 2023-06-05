import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledStatRow = styled.div`
  align-self: stretch;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
`;

export default function StatRow({ children }) {
  return <StyledStatRow>{children}</StyledStatRow>;
}

StatRow.propTypes = {
  children: PropTypes.node.isRequired,
};
