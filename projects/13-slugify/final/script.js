'use strict'

let addressInp = document.getElementById("address");
let resultInp = document.getElementById("result");
let firstVal = resultInp.value;

let slugify = function (text) {
    var trMap = {
        'çÇ': 'c',
        'ğĞ': 'g',
        'şŞ': 's',
        'üÜ': 'u',
        'ıİ': 'i',
        'öÖ': 'o'
    };
    for (var key in trMap) {
        text = text.replace(new RegExp('[' + key + ']', 'g'), trMap[key]);
    }
    return text.replace(/[^-a-zA-Z0-9\s]+/ig, '') // remove non-alphanumeric chars
        .replace(/\s/gi, "-") // convert spaces to dashes
        .replace(/[-]+/gi, "-") // trim repeated dashes
        .toLowerCase();
}

addressInp.addEventListener("keyup", () => {
    let url = addressInp.value;
    resultInp.value = firstVal + slugify(url);
});