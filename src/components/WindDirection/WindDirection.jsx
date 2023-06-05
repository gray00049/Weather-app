import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Loading from '../Loading';

const StyledAirQuality = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #6d67d0;
  padding: 32px 16px 20px;
  border-radius: 10px;

  .title {
    color: #dad8f7;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

const Compass = styled.div`
  position: relative;
  width: 170px;
  height: 170px;
  margin-top: auto;
  padding: 22px;
  border: 3px solid #dad8f7;
  border-radius: 50%;

  &::after {
    content: 'N';
    position: absolute;
    top: 3px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.4rem;
    color: #dad8f7;
  }

  .arrow {
    content: '';
    width: 120px;
    height: 120px;
    padding-top: 19px;
    text-align: center;
    background: #dad8f7;
    border-radius: 50%;
    transform: rotate(${({ direction }) => direction}deg);

    img {
      height: 80%;
    }
  }
`;

export default function WindDirection() {
  const {
    loading,
    weatherData: { currentWeather },
  } = useSelector((state) => state.weather);

  if (loading) {
    return (
      <StyledAirQuality>
        <Loading />
      </StyledAirQuality>
    );
  }

  const { winddirection: windDirection } = currentWeather;

  return (
    <StyledAirQuality>
      <span className="title">Wind direction</span>
      <Compass direction={windDirection}>
        <div className="arrow">
          <img src="/assets/compass-arrow.svg" alt="" />
        </div>
      </Compass>
    </StyledAirQuality>
  );
}
