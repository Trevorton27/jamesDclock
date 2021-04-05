function clock() {
  const time = new Date();
  let hours = time.getHours();
  const minutes = addLeadingZero(time.getMinutes());
  const seconds = addLeadingZero(time.getSeconds());
  const isAm = hours < 12 || hours === 0;
  let amPm = isAm ? 'AM' : 'PM';

  let timeDisplay = `${renderTwelveHourClock(
    hours
  )}:${minutes}:${seconds}:${amPm}`;
  document.getElementById('clock').innerText = timeDisplay;
}

function addDateSuffix(date) {
  if (date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return `${date}st`;
      case 2:
        return `${date}nd`;
      case 3:
        return `${date}rd`;
    }
  }
  return `${date}th`;
}

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function renderTwelveHourClock(hour) {
  hour = hour >= 13 ? hour - 12 : hour;

  hour = hour === 0 ? hour + 12 : hour;
  return hour;
}

function date() {
  const date = new Date();

  const day = days[date.getDay()];
  const dateToday = addDateSuffix(date.getDate());
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const calendar = `${day}, ${month} ${dateToday} ${year}`;

  document.getElementById('date').innerText = calendar;
}

let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
let days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

setInterval(() => {
  clock();
  date();
}, 1000);

clock();
date();
