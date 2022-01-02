function showTime() {
    var date = new Date();
    var UTC = document.getElementById("UTC").value;
    var hour = date.getUTCHours() + parseInt(UTC);
    var minute = date.getUTCMinutes();
    var second = date.getUTCSeconds();

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    var time = `${hour}:${minute}:${second}`;
    var clock = document.getElementById("myClock");

    clock.innerText = time;
    clock.textContent = time;

    setTimeout(showTime, 1000);
}
showTime();