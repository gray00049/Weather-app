import styled from 'styled-components';

const StyledLoading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background: #8f8adb;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: blink infinite 2s ease-in-out;
  @keyframes blink {
    0% {
      width: 0px;
      height: 0px;
      opacity: 1;
    }

    100% {
      width: 100px;
      height: 100px;
      opacity: 0;
    }
  }
`;

export default function Loading() {
  return <StyledLoading />;
}
