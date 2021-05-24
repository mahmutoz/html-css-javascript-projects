'use strict'

const countdown = () => {
    const second = 1000;
    const min = second * 60;
    const hour = min * 60;
    const day = hour * 24;

    const date = new Date("22 june 2021 10:30").getTime();
    const currentDate = new Date().getTime();

    const unprocessedTime = date - currentDate;

    const textDay = Math.abs(Math.floor(unprocessedTime / day));
    const textHour = Math.abs(Math.floor((unprocessedTime % day) / hour));
    const textMin = Math.abs(Math.floor((unprocessedTime % hour) / min));
    const textSecond = Math.abs(Math.floor((unprocessedTime % min) / second));

    document.querySelector('.day-count').textContent = `${textDay}`.padStart(2, 0);
    document.querySelector('.hour-count').textContent = `${textHour}`.padStart(2, 0);
    document.querySelector('.minute-count').textContent = `${textMin}`.padStart(2, 0);
    document.querySelector('.second-count').textContent = `${textSecond}`.padStart(2, 0);
}
countdown();
setInterval(countdown, 1000);