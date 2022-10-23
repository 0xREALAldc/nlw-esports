export function convertHourStringToMinutes(hourString: String) {
              // 18:00 -> ["18", "00"] -> [18, 00]
  const [hours, minutes] = hourString.split(':').map(Number)

  const minutesAmount = (hours * 60) + minutes;

  return minutesAmount;
}