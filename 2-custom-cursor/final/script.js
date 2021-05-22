'use-strict';

const cursorIn = document.querySelector('.cursor--in');
const cursorOut = document.querySelector('.cursor--out');
const links = document.querySelectorAll('nav ul li a');

document.addEventListener("mousemove", (e) => {
    let leftCoord = e.pageX + 3;
    let topCoord = e.pageY + 3;

    cursorIn.style.left = leftCoord - 3 + 'px';
    cursorOut.style.left = leftCoord + 'px';
    cursorIn.style.top = topCoord - 3 + 'px';
    cursorOut.style.top = topCoord + 'px';
});

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorOut.classList.add('larger');
        cursorOut.style.borderColor = 'var(--primary-color)';
    });
    link.addEventListener('mouseleave', () => {
        cursorOut.classList.remove('larger');
        cursorOut.style.borderColor = '#fff';
    });
});