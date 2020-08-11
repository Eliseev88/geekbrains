// const imgURL = 'https://raw.githubusercontent.com/Eliseev88/geekbrains/master/';

// let NAMES = [
//     'MANGO PEOPLE T-SHIRT', 
//     'BANANA PEOPLE T-SHIRT', 
//     'STRAWBERRY PEOPLE T-SHIRT',
//     'ORANGE PEOPLE T-SHIRT',
//     'PUMKIN PEOPLE T-SHIRT',
//     'PINEAPPLE PEOPLE T-SHIRT',
//     'CUCUMBER PEOPLE T-SHIRT',
//     'TOMATO PEOPLE T-SHIRT',
//     'POTATO PEOPLE T-SHIRT',
// ];
// let PRICES = [52, 53, 55, 67, 69, 94, 23, 45, 79];



// function getArrayOfObjects(productImgAddress, productCount) {
//     let local = [];

//     for (let i = 0; i < productCount; i++) {
//         local.push({
//             productName: NAMES[i],
//             productPrice: PRICES[i],
//             productImg: `${imgURL}${productImgAddress}${i + 1}.png`,
//             productId: 'prod_' + i
//         })
//     }
//     return local;
// }

// let catalog = {
//     container: null,
//     items: [],
//     init(productImgAddressEnding, productCount) {
//         this.container = document.querySelector('#catalog');
//         this._fillCatalog(productImgAddressEnding, productCount);
//         this._render();
//     },
//     _fillCatalog(productImgAddressEnding, productCount) { //Инкапсуляция (условная для JS)
//         this.items = getArrayOfObjects(productImgAddressEnding, productCount);
//     },
//     _render() {
//         let htmlStr = '';
//         this.items.forEach(item => {
//             htmlStr += createItemTemplate(item);
//         });
//         this.container.innerHTML = htmlStr;
//     }
// }

function createItemTemplate(item) {
    return `<div class="catalog__item" id="${item.productId}">
    <button class="catalog__bucket" data-id="${item.productId}" data-price="${item.productPrice}" data-name="${item.productName}" data-image="${item.productImg}">
        <img class="catalog__hidden_img" src="https://raw.githubusercontent.com/Eliseev88/geekbrains/3fdc76c4d5e84b1398b168e6239b8651dce01f6f/products/Forma_1_copy.svg" alt="#">
        <span class="catalog__hidden_text">Add to Cart</span>
    </button>
    <div class="catalog__photo">
        <img class="catalog__img" src="${item.productImg}" alt="#">
    </div>
    <div class="catalog__content">
        <a class="catalog__name" href="#">${item.productName}</a>
        <div class="catalog__price">$${item.productPrice}.00</div>
    </div>
</div>`
}



/* С помощью JSON получаем базу */

let urlIndexPage = "https://raw.githubusercontent.com/Eliseev88/geekbrains/master/pr_omega/src/layout/catalog.json";
let urlProductPage = "https://raw.githubusercontent.com/Eliseev88/geekbrains/master/pr_omega/src/layout/catalog_for_product_page.json";

let catalog = {
    container: null,
    items: [],
    init (url) {
        this.container = document.querySelector('#catalog');
        fetch(url)
        .then(data => data.json())
        .then(items => {this.items = items});
        setTimeout(() => {
            this._render();
        }, 200)
    },
    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += createItemTemplate(item);
        });
        this.container.innerHTML = htmlStr;
    }
}


