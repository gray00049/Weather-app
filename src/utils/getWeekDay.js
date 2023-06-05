export default function getWeekDay(date) {
  const weekDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return weekDay[new Date(date).getDay()];
}
