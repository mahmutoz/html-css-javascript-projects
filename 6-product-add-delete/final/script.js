'use strict';

function UI() {}

function Products(productName, productModel, productPrice) {
    this.productName = productName;
    this.productModel = productModel;
    this.productPrice = productPrice;
}

document.getElementById('product-add').addEventListener('submit', function (e) {
    const productName = ((document.getElementById("product-name") || {}).value) || "";
    const productModel = ((document.getElementById('product-model') || {}).value) || "";
    const productPrice = ((document.getElementById("product-price") || {}).value) || "";

    const ui = new UI();
    const product = new Products(productName, productModel, productPrice);

    if (productName === '' || productModel === '' || productPrice === '') {
        ui.productMessages("Please do not leave any blank spaces.", "error");
    } else {

        ui.productAdd(product);
        ui.productMessages('The product has been successfully added.', 'success');
    }
    ui.clearForm(product);
    e.preventDefault();
});

document.querySelector('.table').addEventListener('click', function (e) {
    const ui = new UI();
    ui.productDelete(e.target);
    e.preventDefault();
});

UI.prototype.productAdd = function (product) {
    const tableBody = document.querySelector('.table-body');
    const tableEl = document.querySelector('.table');
    const tr = document.createElement('tr');

    tr.innerHTML = `<td>${product.productName}</td><td>${product.productModel}</td><td>${product.productPrice}</td><td class="del">X</td>`;

    tableBody.appendChild(tr);
    tableEl.style.display = 'table';
}

UI.prototype.productMessages = function (message, className) {
    const divEl = document.createElement('div');
    const container = document.querySelector('.container');
    divEl.className = 'msg ' + className;
    const text = document.createTextNode(message);
    divEl.appendChild(text);
    document.body.insertBefore(divEl, container);

    setTimeout(() => {
        document.querySelector('.msg').remove();
    }, 5000);
}

UI.prototype.clearForm = function (product) {
    const productName = ((document.getElementById("product-name") || {}).value) = "";
    const productModel = ((document.getElementById('product-model') || {}).value) = "";
    const productPrice = ((document.getElementById("product-price") || {}).value) = "";
}

UI.prototype.productDelete = function (target) {
    (target.className === 'del') ? target.parentElement.remove(): "";
}