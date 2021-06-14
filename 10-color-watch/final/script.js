'use strict';

const d = document;

function hexadecimalFind(hour, min, sec) {

    let red = `${Math.round(255 * (hour / 23)).toString(16).toUpperCase()}`.padStart(2, '0');
    let green = `${Math.round(255 * (min / 59)).toString(16).toUpperCase()}`.padStart(2, '0');
    let blue = `${Math.round(255 * (sec / 59)).toString(16).toUpperCase()}`.padStart(2, '0');

    return red + green + blue;
}

function changeColor() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    const hourEl = d.querySelector('.hour');
    const minuteEl = d.querySelector('.minute');
    const secondsEl = d.querySelector('.seconds');
    const watchColorEl = d.querySelector('.watch-color');

    let rgb = '';

    hourEl.textContent = `${hour}`.padStart(2, '0');
    minuteEl.textContent = `${minute}`.padStart(2, '0');
    secondsEl.textContent = `${seconds}`.padStart(2, '0');

    rgb = hexadecimalFind(hour, minute, seconds);

    watchColorEl.textContent = '#' + rgb;
    d.body.style.backgroundColor = `#${rgb}`;
}
changeColor();
setInterval(changeColor, 1000);