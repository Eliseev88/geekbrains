let basket = {
    items: [],
    addProduct(product) {
        this.addProductToObject(product);
        this.renderProductInBasket(product);
        // this.renderTotalSum();
        // this.addRemoveBtnsListeners();
    },
    addProductToObject(product) {
        if(this.items[product.id] = undefined) {
            this.items[product.id] = {
                price: product.price,
                name: product.name,
                image: product.image,
                count: 1
            }
        } else {
            this.items[product.id].count++;
        }
    },
    renderProductInBasket(product) {
        let productExist = document.querySelector(`.drop__count[data-id="${product.id}"]`);
        if(productExist) {
            productExist.textContent++;
            return;
        }
        let productRow = 
        `<div class="drop__box">
            <a class="drop__img" href="single.html"><img src="${product.image}" alt="#"></a>
            <div class="drop__info">
                <a href="single.html" class="drop__title">${product.name}</a>
                <img src="../src/assets/imgs/drop_cart/stars.png" alt="#">
                <div class="drop__price"><span class="drop__count" data-id="${product.id}">1</span><span class="drop__span">x</span>$${product.price}</div>
            </div>
            <a href="#" class="drop__cancel"><i class="fas fa-times-circle productRemoveBtn" data-id="${product.id}"></i></a>
        </div>`;
        let dropCart = document.querySelector('drop');
        dropCart.insertAdjacentHTML("afterbegin", productRow);
    },

};

let basketBtns = document.querySelectorAll('.catalog__bucket');

setTimeout(() => {
    basketBtns.forEach(function (btn) {
        btn.addEventListener('click', function (event) {
            let id = event.srcElement.dataset.id;
            let price = event.srcElement.dataset.price;
            let name = event.srcElement.dataset.name;
            let image = event.srcElement.dataset.image;
            basket.addProduct({ id: id, price: price, name: name, image: image, });
        });
    });
}, 300);

