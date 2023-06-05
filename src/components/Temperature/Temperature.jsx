import styled from 'styled-components';
import { useSelector } from 'react-redux';
import TemperatureData from './TemperatureData';
import WeatherImg from '../WeatherImg';
import Loading from '../Loading';
import StatRow from '../Statistics/StatRow';
import StatInfo from '../Statistics/StatInfo';

const StyledTemperature = styled.div`
  position: relative;
  grid-row: 1/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 32px 12px 12px;
  background: #6d67d0;
  border-radius: 10px;
  text-align: right;
`;

const Location = styled.p`
  position: relative;
  display: inline-block;
  align-self: end;
  padding-right: 20px;
  font-size: 1.6rem;
  line-height: 1.7rem;
  color: #c2bff4;
  font-weight: 700;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: -22px;
    width: 20px;
    height: 20px;
    background: url(${'/assets/location-pin.png'}) no-repeat center center /
      cover;
    transform: translateY(-50%);
  }
`;

export default function Temperature() {
  const { loading, weatherData } = useSelector((state) => state.weather);

  if (loading) {
    return (
      <StyledTemperature>
        <Loading />
      </StyledTemperature>
    );
  }

  const {
    currentWeather: {
      temperature,
      weathercode,
      windspeed,
      humidity,
      precipitation,
    },
    dailyWeather: {
      temperature_2m_max: maxTemperature,
      temperature_2m_min: minTemperature,
    },
  } = weatherData;

  return (
    <StyledTemperature>
      <WeatherImg code={weathercode} />
      <Location>Moscow, Russia</Location>
      <TemperatureData
        current={temperature}
        max={maxTemperature[0]}
        min={minTemperature[0]}
      />
      <StatRow>
        <StatInfo
          img="/assets/wind-icon.svg"
          title="Wind"
          value={windspeed}
          postfix="km/h"
        />
        <StatInfo
          img="/assets/humidity-icon.svg"
          title="Humidity"
          value={humidity}
        />
        <StatInfo
          img="/assets/rain-icon.svg"
          title="Rain"
          value={precipitation}
        />
      </StatRow>
    </StyledTemperature>
  );
}
