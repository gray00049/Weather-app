import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import normalizeTime from '../../utils/normalizeTime';
import getSunPosition from '../../utils/getSunPosition';

const StyledSunTime = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px 16px 16px;
  background: #6d67d0;
  border-radius: 10px;

  .title {
    color: #dad8f7;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      margin-left: 8px;
      font-size: 1.6rem;
      font-weight: 700;
    }
  }
`;

const SunChar = styled.div`
  margin-top: auto;

  .charWrapper {
    position: relative;
    margin: 0 14px 12px;
  }

  .char {
    position: relative;
    height: 120px;
    border: 2px dashed #f6c833;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    overflow: hidden;
    border-bottom: 1px solid #a48e91;
    z-index: 2;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      width: ${({ progress }) => progress}px;
      background: linear-gradient(
        180deg,
        rgba(251, 219, 96, 0.2) 0%,
        rgba(251, 219, 96, 0) 101.89%
      );
    }

    .time {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.7rem;
      color: #ffffff;
    }
  }

  .sunPosition {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: rotate(${({ rotate }) => rotate}deg);
    transform-origin: right;
    width: 120px;
    height: 1px;
  }

  .sun {
    transform: translate(-4px, -50%);
    display: inline-block;
    width: 12px;
    height: 12px;
    background: #f6c833;
    border-radius: 50%;
    z-index: 3;
  }

  .timeRow {
    width: 100%;
    display: flex;
    justify-content: space-between;

    p {
      font-size: 1.4rem;
      line-height: 1.6rem;
      color: #ffffff;
    }
  }
`;

export default function SunTime() {
  const {
    weatherData: { currentWeather },
    loading,
  } = useSelector((state) => state.weather);

  if (loading) {
    return (
      <StyledSunTime>
        <Loading />
      </StyledSunTime>
    );
  }

  const { sunset, sunrise } = currentWeather;

  const sunsetDate = new Date(sunset);
  const sunriseDate = new Date(sunrise);

  const [rotate, progress] = getSunPosition(sunriseDate, sunsetDate);

  return (
    <StyledSunTime>
      <span className="title">
        <img src="/assets/suntime-icon.svg" alt="" />
        <p>Sun Time</p>
      </span>
      <SunChar rotate={rotate} progress={progress}>
        <div className="charWrapper">
          <div className="char">
            <div className="time">{normalizeTime()}</div>
          </div>
          <div className="sunPosition">
            <span className="sun" />
          </div>
        </div>

        <div className="timeRow">
          <p>{normalizeTime(sunriseDate)}</p>
          <p>{normalizeTime(sunsetDate)}</p>
        </div>
      </SunChar>
    </StyledSunTime>
  );
}
