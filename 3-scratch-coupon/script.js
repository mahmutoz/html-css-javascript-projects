'use-strict';

document.addEventListener('mousemove', function (e){
    const scratch = document.querySelector('.scratch');
    const bubbles = document.createElement('span');
    bubbles.style.left = e.offsetX + 'px';
    bubbles.style.top = e.offsetY + 'px';
    scratch.appendChild(bubbles);
});