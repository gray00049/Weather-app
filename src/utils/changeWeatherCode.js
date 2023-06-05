export default function changeWeatherCode(code, isDay = 1) {
  if (isDay === 0) {
    return 9;
  }

  switch (String(code)[0]) {
    case '0':
      return 0;
    case '5':
    case '6':
    case '8':
      return 1;
    case '1':
    case '2':
      return 3;
    case '3':
    case '4':
      return 2;
    case '9':
      return 2;
    default:
      return 2;
  }
}
