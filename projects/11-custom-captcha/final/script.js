const d = document;
const randText = d.querySelector('.rand-text');
const captchaText = d.querySelector('.captcha-text');
const btnRepeat = d.querySelector('.btn-repeat');
const btnCheck = d.querySelector('.btn-check');
const captchaInp = d.querySelector('.captcha-input');
const captchaMsg = d.querySelector('.captcha-msg');

const generateCode = function () {
    let randomCode = '';
    for (let i = 0; i < 6; i++) {
        let code = Math.round(Math.random() * 35).toString(36);
        randomCode += Math.round(Math.random()) == 1 ? code.toUpperCase() : code.toLowerCase();
    }
    return randomCode;
}

randText.textContent = generateCode();

btnRepeat.addEventListener('click', (e) => {
    e.preventDefault();
    randText.textContent = generateCode();
    captchaInp.value = '';
    captchaMsg.style.display = "none";
});

btnCheck.addEventListener('click', (e) => {
    e.preventDefault();
    let code = randText.textContent;
    if (code === captchaInp.value) {
        captchaMsg.innerHTML = 'Well Done! You don\'t appear to be robot.';
        captchaMsg.style.display = "block";
        captchaMsg.style.color = "green";
    } else {
        captchaMsg.innerHTML = 'Captcha not matched. Please try again.';
        captchaMsg.style.display = "block";
        captchaMsg.style.color = "orangered";
    }
});