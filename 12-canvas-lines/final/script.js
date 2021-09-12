'use strict'

const d = document;

const canvas = d.getElementById('canvas');
const canvasWidth = d.getElementById('lineWidth');
const canvasHeight = d.getElementById('lineHeight');
const drawBtn = d.getElementById('btnDraw');
const toggleBtn = d.querySelector(".toggle");
const clearBtn = d.querySelector(".clear");
const resultEl = d.querySelector(".results");
const totalEl = d.querySelector(".total");
const ctx = canvas.getContext('2d');

let direction = false;
let section = new Array();
let xCords = new Array();
let yCords = new Array();
let total = 0;
let flag = -1;

toggleBtn.addEventListener('click', () => {
    if (direction === false) {
        direction = true;
        toggleBtn.value = 'ı';
    } else {
        direction = false;
        toggleBtn.value = '-';
    }
});

clearBtn.addEventListener('click', () => {
    location.reload();
});

drawBtn.addEventListener('click', () => {
    let width = canvasWidth.value;
    let height = canvasHeight.value;
    if (width <= canvas.width && height <= canvas.height)
        createCanvas(0, 0, width, height);
});

function createCanvas(firstX_, firstY_, lastX_, lastY_) {
    let len = section.length;
    section[len] = {
        firstX: firstX_,
        firstY: firstY_,
        lastX: lastX_,
        lastY: lastY_
    };
    ctx.rect(section[len].firstX, section[len].firstY, section[len].lastX - section[len].firstX, section[len].lastY - section[len].firstY);
    ctx.strokeStyle = '#777';
    ctx.stroke();
    if (direction) {
        lineLength(section[len].lastX - section[len].firstX, section[len].firstX, section[len].firstY);
    } else {
        lineLength(section[len].lastY - section[len].firstY, section[len].firstX, section[len].firstY);
    }
}

function updateSection(id, firstX_, firstY_, lastX_, lastY_) {
    section[id] = {
        firstX: firstX_,
        firstY: firstY_,
        lastX: lastX_,
        lastY: lastY_
    };
    ctx.rect(section[id].firstX, section[id].firstY, section[id].lastX - section[id].firstX, section[id].lastY - section[id].firstY); // draw canvas
    ctx.stroke();
    flag = -1;
}

canvas.addEventListener('click', function (e) {
    let pos = getMousePosition(canvas, e);
    let x = pos.x;
    let y = pos.y;

    for (let i = 0; i < section.length; i++) {

        if (x >= section[i].firstX && x <= section[i].lastX && y >= section[i].firstY && y <= section[i].lastY) {
            flag = i;
            break;
        }
    }
    if (flag != -1) {
        let prevFirstX = section[flag].firstX;
        let prevFirstY = section[flag].firstY;
        if (direction) { // horizontal
            createCanvas(section[flag].firstX, y, section[flag].lastX, section[flag].lastY);
            updateSection(flag, section[flag].firstX, prevFirstY, section[flag].lastX, y);
        } else { // vertical
            createCanvas(x, section[flag].firstY, section[flag].lastX, section[flag].lastY);
            updateSection(flag, prevFirstX, section[flag].firstY, x, section[flag].lastY);
        }
    }
});

function lineLength(len, x, y) {
    let li = document.createElement("li");
    li.textContent = Math.trunc(len);
    resultEl.appendChild(li);
    ctx.font = "12px serif";
    ctx.fillStyle = "red";
    ctx.fillText(Math.trunc(len), x + 2, y + 12);

    total += +len;
    totalEl.textContent = `Total: ${total}`;
}

function getMousePosition(c, e) {
    var rect = c.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
}