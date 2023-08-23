const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const endDate = "1 Jan 2024";

function countdown() {
  const endDateTime = new Date(endDate);
  const cureentTime = new Date();

  const secondsDiff = Math.floor((endDateTime - cureentTime) / 1000);
  const days = Math.floor(secondsDiff / 3600 / 24);
  const hours = Math.floor((secondsDiff % (3600 * 24)) / 3600);
  const minutes = Math.floor((secondsDiff % 3600) / 60);
  const seconds = secondsDiff % 60;
  console.log(
    `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
  );

  daysElement.innerHTML = formateTime(days);
  hoursElement.innerHTML = formateTime(hours);
  minutesElement.innerHTML = formateTime(minutes);
  secondsElement.innerHTML = formateTime(seconds);
}

function formateTime(time) {
  return time < 10 ? `0${time}` : time;
  
}

countdown();
setInterval(countdown,1000);
