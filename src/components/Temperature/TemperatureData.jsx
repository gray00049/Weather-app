import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTemperatureData = styled.div`
  margin-top: 120px;
  text-align: center;
`;

const Current = styled.p`
  position: relative;
  display: inline-block;
  font-weight: 700;
  font-size: 8.8rem;
  line-height: 10.6rem;
  color: #ffffff;

  &::after {
    content: '°C';
    position: absolute;
    top: 17px;
    right: -4px;
    font-size: 2.4rem;
    line-height: 2.9rem;
    color: #dad8f7;
    transform: translateX(100%);
  }
`;

const Range = styled.div`
  padding-left: 15px;

  & > p {
    display: inline-block;
    font-size: 2rem;
    line-height: 2.4rem;
    font-weight: 700;
    color: #ffffff;

    &::after {
      content: ' °';
    }

    &:last-child {
      margin-left: 10px;
      color: #c2bff4;
    }
  }
`;

export default function TemperatureData({ current, max, min }) {
  return (
    <StyledTemperatureData>
      <Current>{current}</Current>
      <Range>
        <p>{max}</p>
        <p>{min}</p>
      </Range>
    </StyledTemperatureData>
  );
}

TemperatureData.propTypes = {
  current: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
};
