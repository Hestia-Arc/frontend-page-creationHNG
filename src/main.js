const timeEl = document.querySelector(".time");
const dayEl = document.querySelector(".day");

let date = new Date();

// timeEl.textContent = date.toLocaleTimeString("en-US");
timeEl.textContent = date.getUTCMilliseconds();

// DAY NAME
let dayName = date.getDay();
//   dayNum = today.getDate(),
 let  month = date.getMonth();
 let year = date.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// dayEl.textContent = `${week[dayName]}, ${months[month]} ${year}`;
dayEl.textContent = `${week[dayName]}`;

