const getSunRotate = (time, sunrise, sunset) => {
  const duration = sunset - sunrise;
  const passedTime = time - sunrise;

  if (passedTime < 0) {
    return 0;
  }

  if (time > sunset) {
    return 180;
  }

  return Math.round(passedTime / (duration / 100)) * 1.8;
};

const getSunProgress = (degs) => {
  let width;
  if (degs === 0) {
    width = 0;
  } else if (degs === 180) {
    width = 240;
  } else if (degs < 90) {
    const offset = Math.abs(120 * Math.cos(degs * (Math.PI / 180)));
    width = 121 - offset;
  } else if (degs > 90) {
    const offset = Math.abs(120 * Math.sin((90 - degs) * (Math.PI / 180)));
    width = 119 + offset;
  } else width = 120;

  return width;
};

export default function getSunPosition(sunrise, sunset) {
  const time = new Date();
  const degs = getSunRotate(time, sunrise, sunset);
  const progress = getSunProgress(degs);

  return [degs, progress];
}
