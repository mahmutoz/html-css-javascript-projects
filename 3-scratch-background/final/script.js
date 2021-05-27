'use-strict';

document.addEventListener('mousemove', function (e){
    const body = document.querySelector('body');
    const bubbles = document.createElement('span');
    bubbles.style.left = -100 + e.offsetX + 'px';
    bubbles.style.top = -100 + e.offsetY + 'px';
    body.appendChild(bubbles);
});