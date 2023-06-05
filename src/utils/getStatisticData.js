export default function getStatisticData(time, weatherData) {
  const timeIndex = weatherData.time.indexOf(time);

  return [
    weatherData.relativehumidity_2m[timeIndex],
    weatherData.precipitation_probability[timeIndex],
  ];
}
