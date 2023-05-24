import styled from 'styled-components';
import TemperatureData from './TemperatureData';

const StyledTemperature = styled.div`
  grid-row: 1/3;
  padding: 32px 12px 12px;
  background: #6d67d0;
  border-radius: 10px;
  text-align: right;
`;

const Location = styled.p`
  position: relative;
  display: inline-block;
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
  return (
    <StyledTemperature>
      <Location>Moscow, Russia</Location>
      <TemperatureData current="18" max="22" min="16" />
    </StyledTemperature>
  );
}
