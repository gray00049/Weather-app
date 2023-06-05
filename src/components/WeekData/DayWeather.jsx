import styled from 'styled-components';
import PropTypes from 'prop-types';
import getWeekDay from '../../utils/getWeekDay';
import changeWeatherCode from '../../utils/changeWeatherCode';

const StyledDayWeather = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 20%;
  color: #dad8f7;

  .title {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.8rem;
  }

  img {
    width: 70%;
  }
`;

export const Range = styled.div`
  & > p {
    display: inline-block;
    font-size: 1.6rem;
    line-height: 1.8rem;
    font-weight: 700;
    color: #ffffff;

    &::after {
      content: '°';
    }

    &:last-child {
      margin-left: 4px;
      color: #c2bff4;
    }
  }
`;

export default function DayWeather({
  date,
  maxTemperature,
  minTemperature,
  weatherCode,
}) {
  const code = changeWeatherCode(weatherCode);

  return (
    <StyledDayWeather>
      <p className="title">{getWeekDay(date)}</p>
      <img src={`/assets/weather${code}.svg`} alt="" />
      <Range>
        <p>{Math.round(maxTemperature)}</p>
        <p>{Math.round(minTemperature)}</p>
      </Range>
    </StyledDayWeather>
  );
}

DayWeather.propTypes = {
  date: PropTypes.string.isRequired,
  maxTemperature: PropTypes.number.isRequired,
  minTemperature: PropTypes.number.isRequired,
  weatherCode: PropTypes.number.isRequired,
};
