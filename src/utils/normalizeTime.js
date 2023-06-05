const addZero = (number) => (number > 9 ? number : `0${number}`);

export default function normalizeTime(date = new Date()) {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${addZero(hours)}:${addZero(minutes)}`;
}
