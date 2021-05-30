'use-script';

let batteryLevelDisplay = document.querySelector('.battery--level');
let batteryPercent = document.querySelector('.battery--percent');

navigator.getBattery().then(function (percent) {
    let batteryLevel = percent.level * 100;
    batteryLevelDisplay.style.width = batteryLevel + '%';
    batteryPercent.textContent = batteryLevel + '%';
    if(batteryLevel > 80) {

    }
});