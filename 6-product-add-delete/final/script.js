'use strict';

localStorageRead();

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

function localStorageOperations(){
    let lName, lModel, lPrice;

    if(localStorage.getItem('lName') === null && localStorage.getItem('lModel') === null && localStorage.getItem('lPrice') === null){
        lName = [];
        lModel = [];
        lPrice = [];
    } else {
        lName = JSON.parse(localStorage.getItem('lName'));
        lModel = JSON.parse(localStorage.getItem('lModel'));
        lPrice = JSON.parse(localStorage.getItem('lPrice'));
    }
    return [lName,lModel, lPrice];
}

function localStorageAdd(pName, pModel, pPrice){
    const [lName, lModel, lPrice] = localStorageOperations();
    lName.push(pName);
    lModel.push(pModel);
    lPrice.push(pPrice);

    localStorage.setItem('lName',JSON.stringify(lName));
    localStorage.setItem('lModel',JSON.stringify(lModel));
    localStorage.setItem('lPrice',JSON.stringify(lPrice));
}

function localStorageRead(){
    const tableBody = document.querySelector('.table-body');
    const tableEl = document.querySelector('.table');
    let [lName, lModel, lPrice] = localStorageOperations();

    for (let i = 0; i < lName.length; i++) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${lName[i]}</td><td>${lModel[i]}</td><td>${lPrice[i]}</td><td class="del">X</td>`;
        console.log(tr);
        tableBody.appendChild(tr);
    }
    tableEl.style.display = 'table';
}

UI.prototype.productAdd = function (product) {
    const tableBody = document.querySelector('.table-body');
    const tableEl = document.querySelector('.table');
    const tr = document.createElement('tr');

    tr.innerHTML = `<td>${product.productName}</td><td>${product.productModel}</td><td>${product.productPrice}</td><td class="del">X</td>`;
    tableBody.appendChild(tr);
    tableEl.style.display = 'table';
    localStorageAdd(product.productName, product.productModel, product.productPrice);
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
    localStorageDelete(target.parentElement);
}

function localStorageDelete(item){
    const [lName, lModel, lPrice] = localStorageOperations();


    //item.children[i].innerText
}