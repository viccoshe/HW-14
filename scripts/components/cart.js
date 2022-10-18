import { create } from "./create.js";

class Cart {
    constructor(item){

        this.widget = create ('div', [
            ['class', 'widget']
        ]); 
        this.cartContainer = create('div', [
            ['class', 'cart_page']
        ]);
        this.cart = []; 
       this.addCart = this.addCart.bind(this);


    }

    getWidget() {
        let counter = this.cart.length ?? 0;
        let totalPrice = this.cart.reduce((total, item) => total + item.price, 0);

        this.widget.innerHTML = `
            <a href="#cart">
                <div img="img"><img src="./img/cart1.png" alt="cart"></div>
            </a>
                <div class="prod-number">${counter}</div>
                <div class="prod-sum">${totalPrice}</div>
            
        `;

        return this.widget;
    }

    render() {
        this.cartContainer.innerHTML = '';
        
        this.cart.forEach(item => {
            let cartElem = create('div', [
                ['class', 'cart-item']
            ]);
            cartElem.innerHTML = `
                <div class="img">
                    <img src="${item.image}" alt="">
                </div>
                <h2 class="prod-title">${item.title}</h2>
                <p class="prod-price">${item.price}</p>
                <p class="prod-description">${item.desc}</p>
            `;
          /*   let delBtn = create('button', [
                ['class', 'button button-delete']
            ], 'Delete'); ////////////////// */

            this.cartContainer.append(cartElem);
        });
    }

    addCart(obj) {
        if (obj){
            obj.counter = 1;
            this.cart.push(obj);
            
        }

        let counter = this.widget.querySelector('.prod-number');
        let totalPrice = this.widget.querySelector('.prod-sum');

        counter.innerText = this.cart.length ?? 0;
        totalPrice.innerText = this.cart.reduce((total, item) => total + item.price, 0) + ' $'?? 0 + ' $ ';

        this.render();
    }

    init() {
        this.render();
        return this.cartContainer;
    }
}

let cart = new Cart();
let widget = cart.getWidget();
let addCart = cart.addCart;
let init = cart.init();

export default init;
export { widget, addCart};
