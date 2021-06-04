'use strict';
const d = document;
const primeNumbers = d.querySelector('.numbers');
const primeNumbersResult = d.querySelector('.prime-numbers');
let maxValue = false;

const enterANumber = function (){
    return +prompt('Enter a number (2-10000)', "100");
}

while(!maxValue){
    let temp = enterANumber();
    maxValue = (temp > 1 && temp < 10001) ? temp : false;
}

let allValues = new Array(maxValue).fill(true);
allValues[0] = false;
allValues[1] = false;

const randomColor = function (){
    let str = 'abcdef0123456789';
    let randColor = '#';
    for(let i = 0; i<=5; i++){
        randColor += str[Math.floor(Math.random() * str.length)];
    }
    return randColor;
}

const printNumberBox = function (){
    for (let i = 0; i < maxValue; i++){
        const li = d.createElement('li');
        li.classList.add(`item-${i+1}`);
        li.textContent = i + 1;
        primeNumbers.appendChild(li);
    }
    d.querySelector(".item-1").style.background = "black"; // first box
}

let endAnimation;
let i = 2; // initial value
let j = 0;
let init = 0;
let primes = [];
let color;

printNumberBox();
const primeNumbersFind = function (){
    if(i*i < maxValue){
        if(allValues[i]){
            if(j===0){
                j = i * i;
                color = randomColor();
                d.querySelector(`.item-${i}`).style.transform = "scale(1.2)";
                primeNumbersResult.textContent += (primeNumbersResult.textContent === "") ? i : `, ${i}`;
            }
            if(j <= maxValue) {
                allValues[j] = false;
                d.querySelector(`.item-${j}`).style.backgroundColor = `${color}`;
                j += i;
            } else {
                d.querySelector(`.item-${i}`).style.transform = "scale(1)";
                i += 1;
                j = 0;
            }
        } else {
            i += 1;
        }
    } else {
        clearInterval(animate);
        for(let x = i; x < allValues.length; x++){
            if(allValues[x])
                primes.push(x);
        }
        endAnimation = setInterval(result, 500);
    }
}

const result = function (){
    if(init < primes.length){
        if (init-1 > 0) d.querySelector(`.item-${primes[init-1]}`).style.transform = "scale(1)";
        d.querySelector(`.item-${primes[init]}`).style.transform = "scale(1.2)";
        primeNumbersResult.textContent += `, ${primes[init]}`;
        ++init;
    }else {
        d.querySelector(`.item-${primes[init-1]}`).style.transform = "scale(1)";
        clearInterval(endAnimation);
        for(let k=0; k < allValues.length; k++){
            if (allValues[k]){
                let el = d.querySelector(`.item-${k}`);
                el.style.background = "rebeccapurple";
                el.style.transform = "scale(1.01)";
                el.style.color = "white";
                el.style.fontWeight = "800";
                el.style.fontSize = "1.5rem";
            }
        }
    }
}

let animate = setInterval(function(){
    primeNumbersFind();
},100);