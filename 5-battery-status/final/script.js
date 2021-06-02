'use script';
let batteryLevelDisplay = document.querySelector('.battery--level');
let batteryPercent = document.querySelector('.battery--percent');
let batteryCharging = document.querySelector('.battery--charging');

function battery() {
    navigator.getBattery().then(function (battery) {
        let batteryLevel = battery.level * 100;
        batteryCharging.textContent = (battery.charging) ? 'Battery is charging' : 'Battery isn\'t charging';
        batteryCharging.style.backgroundColor = (battery.charging) ? 'var(--green)' : 'var(--red)';

        batteryLevelDisplay.style.width = batteryLevel + '%';
        batteryPercent.textContent = batteryLevel + '%';

        if (batteryLevel > 80) {
            batteryLevelDisplay.style.backgroundColor = `var(--green)`;
            batteryPercent.style.color = `var(--green)`;
        } else if (batteryLevel > 60 && batteryLevel <= 80) {
            batteryLevelDisplay.style.backgroundColor = `var(--light-green)`;
            batteryPercent.style.color = `var(--light-green)`;
        } else if (batteryLevel > 40 && batteryLevel <= 60) {
            batteryLevelDisplay.style.backgroundColor = `var(--light-red)`;
            batteryPercent.style.color = `var(--light-red)`;
        } else {
            batteryLevelDisplay.style.backgroundColor = `var(--red)`;
            batteryPercent.style.color = `var(--red)`;
        }
    });
}
battery();
setInterval(battery,1000);