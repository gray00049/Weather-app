import styled from 'styled-components';
import { useSelector } from 'react-redux';
import DayWeather from './DayWeather';
import Loading from '../Loading';

const StyledWeekData = styled.div`
  position: relative;
  grid-column: 2/4;
  background: #6d67d0;
  border-radius: 10px;
  padding: 40px;

  display: flex;
`;

export default function WeekData() {
  const {
    loading,
    weatherData: { dailyWeather },
  } = useSelector((state) => state.weather);

  if (loading) {
    return (
      <StyledWeekData>
        <Loading />
      </StyledWeekData>
    );
  }

  const {
    time,
    temperature_2m_max: maxTemperature,
    temperature_2m_min: minTemperature,
    weathercode,
  } = dailyWeather;

  return (
    <StyledWeekData>
      {time.slice(1).map((item, index) => (
        <DayWeather
          key={item}
          date={item}
          maxTemperature={maxTemperature[index + 1]}
          minTemperature={minTemperature[index + 1]}
          weatherCode={weathercode[index + 1]}
        />
      ))}
    </StyledWeekData>
  );
}
