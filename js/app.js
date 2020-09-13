const newYears = "1 Jan 2021";

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdown() {
    const newYearDate = new Date(newYears);
    const yearPresent = new Date();

    const totalSeconds = (newYearDate - yearPresent) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);

    const hours = Math.floor(totalSeconds / 3600) % 24;

    const minutes = Math.floor(totalSeconds / 60) % 60;

    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = formatTime(seconds);


}

function formatTime(time) {

    return time < 10 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);