import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWeatherImg = styled.img`
  position: absolute;

  ${(props) =>
    props.code === 9
      ? `
    top: -80px;
    left: -60px;
    width: 210px;
  `
      : `
    top: -100px;
    left: -70px;
    width: 250px;
  `}
`;

export default function WeatherImg({ code }) {
  return <StyledWeatherImg code={code} src={`/assets/weather${code}.svg`} />;
}

WeatherImg.propTypes = {
  code: PropTypes.number.isRequired,
};
